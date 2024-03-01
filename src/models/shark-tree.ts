import { SVG_NAMESPACE } from "../constants/strings";
import { SharkTreeNodeConfig } from "../interfaces/shark-config";
import { SharkSpecies } from "./shark-species";
import { SVG_SIZE } from "../constants/constants";
import { SharkTreeNode } from "./shark-tree-node";
import { Svg } from "../drawing/svg";

export class SharkTree {
    config: SharkTreeNodeConfig
    root: SharkTreeNode

    centerX: number
    centerY: number
    radius: number
    levelHeight: number

    currentNode: SharkSpecies|SharkTreeNode|null
    cursorIndex: number
    currentSharkIndex: number

    sharkScreen: HTMLParagraphElement|null // remove later and replace with events

    constructor(sharkTreeConfig: SharkTreeNodeConfig) {
        this.config = sharkTreeConfig;
        this.root = new SharkTreeNode(this.config, null);

        this.centerX = SVG_SIZE / 2;
        this.centerY = SVG_SIZE / 2;
        this.radius = SVG_SIZE / 3;
        const maxDepth = this.getMaxDepth();
        this.levelHeight = this.radius / maxDepth;

        this.currentNode = this.root;
        this.cursorIndex = 0;
        this.currentSharkIndex = 0;

        this.sharkScreen = null;
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

    traverse(node: SharkTreeNode | SharkSpecies = this.root): void {
        if (node instanceof SharkTreeNode) node.children.forEach(child => this.traverse(child));
    }
    
    /*----------------------------------------|
    |                DRAWING                  |
    |----------------------------------------*/

    highlightPathToShark(binomialName: string, strokeWidth = 3, color = "black"): void {
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
        const dot = Svg.drawCircle(centerX, centerY, 5, "black");
        // dot.addEventListener("click", (_event: WheelEvent) => {
        //     let isHighlighted = false;
        //     setInterval(() => {
        //         const parentPath = this.currentNode.parentPath;
        //         const parentPathSegmentsToBlink = [parentPath[0]];
        //         const firstChildPath = this.currentNode instanceof SharkTreeNode ? this.currentNode.childPaths[this.cursorIndex] : null;
        //         if (this.currentNode.getParent() === null) dot.setAttribute("stroke-width", isHighlighted ? "2" : "1");
        //         else dot.setAttribute("stroke-width", "1");
        //         // parentPathSegmentsToBlink.forEach(segment => segment.setAttribute("stroke", isBlack ? blinkColor : "black"));
        //         firstChildPath.forEach(segment => segment.setAttribute("stroke-width", isHighlighted ? "2" : "1"));
        //         isHighlighted = !isHighlighted;
        //     }, 500);
        // });
        // window.addEventListener("keydown", function(event) {
        //     event.preventDefault();
        //     const numChildPaths = this.currentNode.childPaths.length;

        //     const parentPath = this.currentNode.parentPath;
        //     const parentPathSegmentsToBlink = [parentPath[parentPath.length - 1]];
        //     const firstChildPath = this.currentNode instanceof SharkTreeNode ? this.currentNode.childPaths[this.cursorIndex] : null;


        //     if (event.key === "ArrowRight") {
        //         this.cursorIndex = (this.cursorIndex + 1) % numChildPaths;
        //         firstChildPath.forEach(segment => segment.setAttribute("stroke", "black"));
        //     } else if (event.key === "ArrowLeft") {
        //         this.cursorIndex = (this.cursorIndex + (numChildPaths - 1)) % numChildPaths;
        //         firstChildPath.forEach(segment => segment.setAttribute("stroke", "black"));
        //     } else if (event.key === "ArrowDown") {
        //         if (this.currentNode.getParent() !== null) {
        //             this.currentNode = this.currentNode.getParent();
        //             this.cursorIndex = 0;
        //         }
        //     } else if (event.key === "ArrowUp") {
        //         if (this.currentNode.children) {
        //             this.currentNode = this.currentNode.children[this.cursorIndex];
        //             this.cursorIndex = 0;
        //         }
        //     }
        //     if (this.currentNode instanceof SharkSpecies) {
        //         const sharkIndex = this.currentNode.index;
        //         console.log(sharkIndex, sharkSpecies[sharkIndex])
        //         this.sharkScreen.innerHTML = sharkSpecies[sharkIndex].getFormattedString();
        //     }
        // }.bind(this));
        svg.appendChild(dot);

        sharkSpecies.forEach((shark, index) => {
            // Calculate the coordinates for the current point
            const angle = index * spacing;
            const x = this.centerX + this.radius * Math.cos(angle);
            const y = this.centerY + this.radius * Math.sin(angle);
            shark.setX(x);
            shark.setY(y);
            shark.setIndex(index);
    
            // Create a circle for the current point
            const circle = Svg.drawCircle(x, y, 5, "black");
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
            const text = Svg.drawText(x, y, `${sharkSpecies[index].binomialName}`);
            text.style.pointerEvents = "none";
            // svg.appendChild(text);

        });
    }

    draw(): SVGElement {
        const svg = document.createElementNS(SVG_NAMESPACE, "svg");

        svg.setAttribute("width", SVG_SIZE.toString());
        svg.setAttribute("height", SVG_SIZE.toString());

        const sharkSpecies = this.getSharkSpeciesList();
        console.log(sharkSpecies)
        this.drawRim(svg, sharkSpecies, this.centerX, this.centerY);

        let sharkTreeStack:(SharkSpecies|SharkTreeNode)[] = [...sharkSpecies];
        for (let depth = 0; depth < this.getMaxDepth() - 1; depth++) {
            sharkTreeStack = this.runPipeline(svg, sharkTreeStack, depth + 1);
        }

        this.extend(svg, sharkTreeStack);

        let rotation = 0;


        svg.addEventListener("wheel", (event: WheelEvent) => {
            event.preventDefault();
            const delta = -event.deltaY;
            rotation += (delta / 10) % 360;
            svg.setAttribute("transform", `rotate(${rotation})`);
            const numSpecies = sharkSpecies.length;
            const spacing = 360 / numSpecies;
            let sharkIndex = Math.floor(-rotation / spacing + 1) % numSpecies;
            console.log(sharkIndex)
            if (sharkIndex < 0) sharkIndex = numSpecies + sharkIndex;
            if (sharkIndex !== this.currentSharkIndex) {
                console.log(sharkIndex)
                const previousShark = sharkSpecies[this.currentSharkIndex]; 
                previousShark?.getNode()?.setAttribute("fill", "black");
                this.currentSharkIndex = sharkIndex;
                const currentShark = sharkSpecies[sharkIndex];
                console.log(currentShark)
                if (this.sharkScreen) {
                    this.sharkScreen.innerHTML = currentShark.getFormattedString();
                    if (currentShark.imageUrl) {
                        const sharkImg = document.createElement("img");
                        sharkImg.src = currentShark.imageUrl;
                        this.sharkScreen.appendChild(sharkImg);
                    }
                }
                currentShark?.getNode()?.setAttribute("fill", "red");
            }

        });

        return svg;
    }

    runPipeline(svg: SVGElement, sharkTreeStack: (SharkSpecies|SharkTreeNode)[], iteration: number): (SharkSpecies|SharkTreeNode)[] {
        // Extend
        this.extend(svg, sharkTreeStack);

        // Connect
        const indicesRemoved = this.connect(svg, sharkTreeStack, iteration);

        // Cluster
        const newSharkTreeStack = this.getNextStackLayer(sharkTreeStack, indicesRemoved);

        return newSharkTreeStack;
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

    extend(svg: SVGElement, sharkTreeStack: (SharkSpecies|SharkTreeNode)[]): void {
        sharkTreeStack.forEach((item) => {
            const line = item instanceof SharkSpecies ?
                         item.getLastParentPathSegment() :
                         (item.getParentPath().length ?
                         item.getLastParentPathSegment():
                         item.getLastChildPathSegment());
            const x = !line && item instanceof SharkSpecies ? item.getX() : parseFloat(this.getAttributeFromLineOrPath(line, "x2") ?? "0");
            const y = !line && item instanceof SharkSpecies ? item.getY() : parseFloat(this.getAttributeFromLineOrPath(line, "y2") ?? "0");
            const newLine = Svg.extendLineToPoint(x, y, this.centerX, this.centerY, this.levelHeight);
            item.addParentPathSegment(newLine);
            svg.appendChild(newLine);
        });
    }

    getAttributeFromLineOrPath(element: SVGLineElement|SVGPathElement, attribute: string): string|null {
        if (element instanceof SVGLineElement) return element.getAttribute(attribute);
        else if (element instanceof SVGPathElement) return element.dataset[attribute] ?? "0";
        else return "0";
    }

    sameParentHash(item: SharkSpecies|SharkTreeNode, nextItem: SharkSpecies|SharkTreeNode): boolean {
        if (!(item.getParent() || nextItem.getParent())) return false;
        return item.getParentHash() == nextItem.getParentHash();
    }

    readyToMerge(index: number, sharkTreeStack: (SharkSpecies|SharkTreeNode)[], hashChains: string[][]): boolean {
        const parentHash = sharkTreeStack[index].getParentHash();
        const otherHashChains = hashChains.filter((_hashChains, i) => (i !== index));
        const otherHashes = new Set(otherHashChains.flat());
        return !otherHashes.has(parentHash) || (otherHashes.has(parentHash) && otherHashChains.every((hashChain) => Math.abs(hashChain.indexOf(parentHash)) == 1));
    }

    getNumMergeParters(index: number, sharkTreeStack: (SharkSpecies|SharkTreeNode)[], hashChains: string[][]): number {
        const parentHash = sharkTreeStack[index].getParentHash();
        if (!parentHash) return 0;
        // IMPROVE LATER
        const tempArray = hashChains.map((hashChain) => hashChain.includes(parentHash) ? 1 : 0);
        let sum = 0;
        tempArray.forEach((value) => sum += value );
        return sum;
    }

    allSameParentHash(sharkTreeStack: (SharkSpecies|SharkTreeNode)[]) {
        const parentHashes = sharkTreeStack.map(item => item.getParentHash());
        return Array.from(new Set(parentHashes)).length === 1;
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
                    const [firstArc, secondArc] = this.getArcs(line, lines[i + 1], iteration);
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

    addArcsToSvg(svg: SVGElement, arcs: SVGPathElement[]): void {
        arcs.forEach((arc) => svg.appendChild(arc));
    }

    getArcs(line: SVGPathElement, nextLine: SVGPathElement, iteration: number): [SVGPathElement, SVGPathElement] {
        const x1 = parseFloat(this.getAttributeFromLineOrPath(line, "x2") ?? "0");
        const y1 = parseFloat(this.getAttributeFromLineOrPath(line, "y2") ?? "0");
        const x2 = parseFloat(this.getAttributeFromLineOrPath(nextLine, "x2") ?? "0");
        const y2 = parseFloat(this.getAttributeFromLineOrPath(nextLine, "y2") ?? "0");
        const r = this.radius - iteration * this.levelHeight;
        let theta1 = Math.atan2(this.centerY - y1, x1 - this.centerX);
        let theta2 = Math.atan2(this.centerY - y2, x2 - this.centerX);
        if (theta1 > 0) theta1 -= 2 * Math.PI;
        if (theta2 > 0) theta2 -= 2 * Math.PI;
        const thetaMid = (theta1 + theta2) / 2;
        const xMidArc = this.centerX + r * Math.cos(thetaMid);
        const yMidArc = this.centerY - r * Math.sin(thetaMid);

        const firstArc = Svg.drawCircleArc(x1, y1, this.centerX, this.centerY, xMidArc, yMidArc, r);
        const secondArc = Svg.drawCircleArc(xMidArc, yMidArc, this.centerX, this.centerY, x2, y2, r);
        return [firstArc, secondArc];

    }
}