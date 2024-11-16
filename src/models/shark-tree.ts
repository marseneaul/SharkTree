import { SVG_NAMESPACE } from "../constants/strings";
import { SharkTreeNodeConfig } from "../interfaces/shark-config";
import { SharkSpecies } from "./shark-species";
import { SVG_SIZE } from "../constants/constants";
import { SharkTreeNode } from "./shark-tree-node";
import { Svg } from "../drawing/svg";
import { Utils } from "../utils/utils";
import { BLACK } from "../constants/colors";
import { NextSharkEvent } from "../events/next-shark.event";

export class SharkTree {
    config: SharkTreeNodeConfig
    root: SharkTreeNode
    focusNode: SharkTreeNode

    centerX: number
    centerY: number
    radius: number
    levelHeight: number
    maxDepth: number
    zoomLevel: number


    currentNode: SharkSpecies|SharkTreeNode|null
    currentSharkIndex: number

    constructor(sharkTreeConfig: SharkTreeNodeConfig) {
        this.config = sharkTreeConfig;
        this.root = new SharkTreeNode(this.config, null);
        this.focusNode = this.root;

        this.centerX = SVG_SIZE / 2;
        this.centerY = SVG_SIZE / 2;
        this.radius = SVG_SIZE / 3;
        this.maxDepth = this.getMaxDepth();
        this.levelHeight = this.radius / this.maxDepth;
        this.zoomLevel = 0;

        this.currentNode = this.root;
        this.currentSharkIndex = 0;
    }

    /*----------------------------------------|
    |                GETTERS                  |
    |----------------------------------------*/

    getSharkSpeciesList(root: SharkTreeNode = this.root): SharkSpecies[] {
        let sharkSpecies: SharkSpecies[] = [];
        root.children.forEach((child) => {
            if (child instanceof SharkTreeNode) sharkSpecies = [...sharkSpecies, ...this.getSharkSpeciesList(child)];
            else sharkSpecies.push(child as SharkSpecies);
        });
        return sharkSpecies;
    }

    getMaxDepth(root: SharkTreeNode = this.root): number {
        if (!root) return 0;
        if (root.children.length === 0) return 1;
    
        let maxChildDepth = 0;
        root.children.forEach((child) => {
            const childDepth = (child instanceof SharkSpecies) ?
                                1 :
                                this.getMaxDepth(child);
            if (childDepth > maxChildDepth) {
                maxChildDepth = childDepth;
            }
        });
        return maxChildDepth + 1;
    }

    getNumMergeParters(index: number, sharkTreeStack: (SharkSpecies|SharkTreeNode)[], hashChains: string[][]): number {
        const parentHash = sharkTreeStack[index].getParentHash();
        if (!parentHash) return 0;
        const bitArray = hashChains.map((hashChain) => hashChain.includes(parentHash) ? 1 : 0);
        return bitArray.reduce( (accumulator, currentValue) => accumulator + currentValue, 0 );
    }

    getItemSetsToMerge(sharkTreeStack: (SharkSpecies|SharkTreeNode)[]): [(SharkSpecies|SharkTreeNode)[][], number[]] {
        let index = 0;
        const indicesRemoved: number[] = [];
        let itemsInSet: (SharkSpecies|SharkTreeNode)[] = [];
        const itemSetsToMerge: (SharkSpecies|SharkTreeNode)[][] = [];
        const hashChains = sharkTreeStack.map((item) => item.getHashChain());
        while (index < sharkTreeStack.length) {
            const item: SharkSpecies|SharkTreeNode = sharkTreeStack[index];
            if (this.readyToMerge(index, sharkTreeStack, hashChains)) {
                const numMergeParters = this.getNumMergeParters(index, sharkTreeStack, hashChains)
                if (numMergeParters > 1) {
                    itemsInSet.push(item);
                    indicesRemoved.push(index);
                    
                    if (itemsInSet.length == numMergeParters) {
                        itemSetsToMerge.push(itemsInSet);
                        itemsInSet = [];
                    }
                }
            }
            else {
                itemsInSet = [];
            }
            index++;

        }
        return [itemSetsToMerge, indicesRemoved];
    }
    
    /*----------------------------------------|
    |                DRAWING                  |
    |----------------------------------------*/

    highlightPathToShark(binomialName: string, strokeWidth = 3, color = BLACK): void {
        const sharkSpecies = this.getSharkSpeciesList();
        const shark = sharkSpecies.find((s) => s.binomialName === binomialName);
        if (!shark) return;
        shark.highlightNode();
        shark.highlightParentPath(strokeWidth, color);
        let sharkParent = shark.getParent();
        
        while (sharkParent) {
            sharkParent.highlightParentPath(strokeWidth, color);
            sharkParent = sharkParent.getParent();
        }
    }

    drawRim(svg: SVGElement, sharkSpecies: SharkSpecies[], centerX: number, centerY: number): void {
        const outerCircle = Svg.drawCircle(centerX, centerY, this.radius);
        svg.appendChild(outerCircle)


        const numSpecies = sharkSpecies.length;
        const spacing = (2 * Math.PI) / numSpecies;

        // Create a dot for the center
        const dot = Svg.drawCircle(centerX, centerY, 5, BLACK);
        svg.appendChild(dot);

        sharkSpecies.forEach((shark, index) => { this.drawSharkOnRim(svg, shark, index, spacing) });
    }

    drawSharkOnRim(svg: SVGElement, shark, index, spacing: number): void {
            // Calculate the coordinates for the current point
            const angle = index * spacing;
            const x = this.centerX + this.radius * Math.cos(angle);
            const y = this.centerY + this.radius * Math.sin(angle);
            shark.setX(x);
            shark.setY(y);
            shark.setIndex(index);
    
            // Create a circle for the current point
            const circle = Svg.drawCircle(x, y, 5, BLACK);
            circle.style.zIndex = "10";
            shark.setNode(circle);
            circle.dataset.shark = JSON.stringify(shark.config);
            circle.addEventListener("click", (event: WheelEvent) => {
                const sharkJson = JSON.parse(circle.dataset.shark);
                const binomialName = sharkJson.binomialName;
                this.highlightPathToShark(binomialName, 3);
            });
    
            svg.appendChild(circle);
    
            // Add text for the species name
            const text = Svg.drawText(x, y, `${shark.binomialName}`);
            text.style.pointerEvents = "none";
            // svg.appendChild(text);

    }

    draw(): SVGElement {
        const svg = document.createElementNS(SVG_NAMESPACE, "svg");

        svg.setAttribute("width", SVG_SIZE.toString());
        svg.setAttribute("height", SVG_SIZE.toString());

        const sharkSpecies = this.getSharkSpeciesList();

        this.drawRim(svg, sharkSpecies, this.centerX, this.centerY);
        
        let sharkTreeStack:(SharkSpecies|SharkTreeNode)[] = [...sharkSpecies];
        
        for (let depth = 0; depth < this.getMaxDepth() - 1; depth++) {
            sharkTreeStack = this.runPipeline(svg, sharkTreeStack, depth + 1);
        }
        
        this.extend(svg, sharkTreeStack);

        this.addWheelEventListener(svg, sharkSpecies);

        svg.setAttribute("id", "shark-tree");
        return svg;
    }

    /*----------------------------------------|
    |                PIPELINE                 |
    |----------------------------------------*/

    runPipeline(svg: SVGElement, sharkTreeStack: (SharkSpecies|SharkTreeNode)[], iteration: number): (SharkSpecies|SharkTreeNode)[] {
        // Extend
        this.extend(svg, sharkTreeStack);

        // Connect
        const indicesRemoved = this.connect(svg, sharkTreeStack, iteration);

        // Cluster
        const newSharkTreeStack = this.getNextStackLayer(sharkTreeStack, indicesRemoved);

        return newSharkTreeStack;
    }

    extend(svg: SVGElement, sharkTreeStack: (SharkSpecies|SharkTreeNode)[]): void {
        sharkTreeStack.forEach((item) => {
            const line = item instanceof SharkSpecies ?
                         item.getLastParentPathSegment() :
                         (item.getParentPath().length ?
                         item.getLastParentPathSegment():
                         item.getLastChildPathSegment());
            const x = !line && item instanceof SharkSpecies ? item.getX() : parseFloat(Utils.getAttributeFromLineOrPath(line, "x2") ?? "0");
            const y = !line && item instanceof SharkSpecies ? item.getY() : parseFloat(Utils.getAttributeFromLineOrPath(line, "y2") ?? "0");
            const newLine = Svg.extendLineToPoint(x, y, this.centerX, this.centerY, this.levelHeight);
            item.addParentPathSegment(newLine);
            svg.appendChild(newLine);
        });
    }
    
    connect(svg: SVGElement, sharkTreeStack: (SharkSpecies|SharkTreeNode)[], iteration: number): number[] {
        const [itemSetsToMerge, indicesRemoved] = this.getItemSetsToMerge(sharkTreeStack);
        itemSetsToMerge.forEach((itemSet) => {
            const arcSet: SVGPathElement[] = [];
            const numItems = itemSet.length;
            const middleIndex = numItems - 1;
            const lines = itemSet.map((item) => item.getLastParentPathSegment());
            lines.forEach((line, i) => {
                if (i !== lines.length - 1) {
                    const [firstArc, secondArc] = Svg.getArcs(this.centerX, this.centerY, this.radius, this.levelHeight, line, lines[i + 1], iteration);
                    arcSet.push(firstArc, secondArc);
                }
            });
            for (let i = 0; i < Math.floor(numItems / 2); i++) {
                arcSet.slice(2 * i, middleIndex).forEach((arc) => itemSet[i].addParentPathSegment(arc));
                arcSet.slice(middleIndex, arcSet.length - 2 * i).forEach((arc) => itemSet[numItems - 1 - i].addParentPathSegment(arc));
            }
            itemSet.forEach((item) => item.addParentPathToParentChildPath());
            this.addArcsToSvg(svg, arcSet);
        });
        
        return indicesRemoved;
    }


    getNextStackLayer(sharkTreeStack: (SharkSpecies|SharkTreeNode)[], indicesRemoved: number[]): (SharkSpecies|SharkTreeNode)[] {
        const newSharkTreeStack: (SharkSpecies|SharkTreeNode)[] = [];
        const parentHashes = new Set();
        sharkTreeStack.forEach((item, index) => {
            if (!indicesRemoved.includes(index)) {
                newSharkTreeStack.push(item);
            }
            else {
                const parent = item.getParent();
                const parentHash = parent?.getHash();
                if (parent && !parentHashes.has(parentHash)) {
                    parentHashes.add(parentHash);
                    newSharkTreeStack.push(parent);
                }
            }
        });
        return newSharkTreeStack;
    }

    /*----------------------------------------|
    |                HELPERS                  |
    |----------------------------------------*/

    readyToMerge(index: number, sharkTreeStack: (SharkSpecies|SharkTreeNode)[], hashChains: string[][]): boolean {
        const parentHash = sharkTreeStack[index].getParentHash();
        const otherHashChains = hashChains.filter((_hashChains, i) => (i !== index));
        const otherHashes = new Set(otherHashChains.flat());
        return !otherHashes.has(parentHash) || (otherHashes.has(parentHash) && otherHashChains.every((hashChain) => Math.abs(hashChain.indexOf(parentHash)) == 1));
    }

    addArcsToSvg(svg: SVGElement, arcs: SVGPathElement[]): void {
        arcs.forEach((arc) => svg.appendChild(arc));
    }

    /*----------------------------------------|
    |                HANDLERS                 |
    |----------------------------------------*/

    addWheelEventListener(svg: SVGElement, sharkSpecies: SharkSpecies[]): void {
        let rotation = 0;
        svg.addEventListener("wheel", (event: WheelEvent) => {
            event.preventDefault();
            const delta = -event.deltaY;
            rotation += (delta / 10) % 360;
            svg.setAttribute("transform", `rotate(${rotation})`);
            const numSpecies = sharkSpecies.length;
            const spacing = 360 / numSpecies;
            let sharkIndex = Math.floor(-rotation / spacing + 1) % numSpecies;
            if (sharkIndex < 0) sharkIndex = numSpecies + sharkIndex;
            if (sharkIndex !== this.currentSharkIndex) {
                const previousShark = sharkSpecies[this.currentSharkIndex];
                previousShark?.getNode()?.setAttribute("fill", "black");
                this.currentSharkIndex = sharkIndex;
                const currentShark = sharkSpecies[sharkIndex];
                const nextSharkEvent = new NextSharkEvent(currentShark);
                const event = new CustomEvent(nextSharkEvent.type, { detail: nextSharkEvent });
                window.dispatchEvent(event);
            }
        });
    
    }
}
