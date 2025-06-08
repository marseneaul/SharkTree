import { SVG_NAMESPACE } from "../constants/strings";
import { SharkTreeNodeConfig } from "../interfaces/shark-config";
import { SharkSpecies } from "./shark-species";
import { DEFAULT_SVG_SIZE } from "../constants/constants";
import { SharkTreeNode } from "./shark-tree-node";
import { Svg } from "../drawing/svg";
import { Utils } from "../utils/utils";
import { BLACK, RED, TAXONOMIC_COLORS } from "../constants/colors";
import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION, FEEDING_BEHAVIOR, OCEAN_ZONE, GEOGRAPHICAL_DISTRIBUTION, HABITAT, WATER_COLUMN, PHYSICAL_CHARACTERISTIC, BEHAVIOR, NUM_GILLS, NUM_DORSAL_FINS, ANAL_FIN, NICTITATING_MEMBRANE, CAUDAL_FIN_SHAPE, MOUTH_IN_FRONT_OF_EYES, BIOLUMINESCENT, DORSAL_FIN_SPINES, SPIRACLES, FLATTENED_BODY, GROUP_BEHAVIOR, TAXONOMIC_LEVELS, PROXIMAL_DORSAL_FINS, SPECIES_TYPE, TAIL_SPINES } from "../constants/enums";

export class SharkTree {
    config: SharkTreeNodeConfig
    root: SharkTreeNode
    speciesType: SPECIES_TYPE

    centerX: number
    centerY: number
    radius: number
    svgSize: number
    levelHeight: number
    maxDepth: number


    currentNode: SharkSpecies|SharkTreeNode|null
    currentSharkIndex: number

    activeTaxonomicLevel: string | null;
    activeTaxonomicValue: string | null;
    taxonomicLevels: Map<string, { species: SharkSpecies[], color: string }>;

    activeTagCategory: string | null;
    activeTagValue: string | null;
    tagCategories: Map<string, { species: SharkSpecies[] }>;


    constructor(sharkTreeConfig: SharkTreeNodeConfig, containerWidth: number, speciesType = SPECIES_TYPE.SHARKS) {
        this.config = sharkTreeConfig;
        this.root = new SharkTreeNode(this.config, null);
        this.speciesType = speciesType;

        this.svgSize = containerWidth > 0 ? Math.min(containerWidth, window.innerHeight) : DEFAULT_SVG_SIZE;
        this.centerX = this.svgSize / 2;
        this.centerY = this.svgSize / 2;
        this.radius = this.svgSize / 3;
        this.maxDepth = this.getMaxDepth();
        this.levelHeight = this.radius / this.maxDepth;

        this.currentNode = this.root;
        this.currentSharkIndex = 0;

        this.activeTaxonomicLevel = null;
        this.activeTaxonomicValue = null;
        this.taxonomicLevels = new Map();
        this.initializeTaxonomicLevels();

        this.activeTagCategory = null;
        this.activeTagValue = null;
        this.tagCategories = new Map();
        this.initializeTagCategories();
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

    draw(): SVGElement {
        const svg = document.createElementNS(SVG_NAMESPACE, "svg");
        svg.setAttribute("width", this.svgSize.toString());
        svg.setAttribute("height", this.svgSize.toString());
        svg.setAttribute("viewBox", `0 0 ${this.svgSize} ${this.svgSize}`);
    
        // Add solid background
        const bg = document.createElementNS(SVG_NAMESPACE, "rect");
        bg.setAttribute("x", "0");
        bg.setAttribute("y", "0");
        bg.setAttribute("width", this.svgSize.toString());
        bg.setAttribute("height", this.svgSize.toString());
        bg.setAttribute("fill", "rgba(245, 245, 245, 0.5)"); // Subtle grey, slightly opaque
        svg.appendChild(bg);
    
        const g = document.createElementNS(SVG_NAMESPACE, "g");
        g.setAttribute("id", "shark-tree-group");
        svg.appendChild(g);
    
        const sharkSpecies = this.getSharkSpeciesList();
        this.drawRim(g, svg, sharkSpecies, this.centerX, this.centerY);
    
        let sharkTreeStack: (SharkSpecies | SharkTreeNode)[] = [...sharkSpecies];
        for (let depth = 0; depth < this.getMaxDepth() - 1; depth++) {
            sharkTreeStack = this.runPipeline(g, sharkTreeStack, depth + 1);
        }
        this.extend(g, sharkTreeStack);
    
        this.addInteractionListeners(svg, g, sharkSpecies);
        svg.setAttribute("id", "shark-tree");
        this.updateSelection(sharkSpecies[0]);
        return svg;
    }

    drawRim(g: SVGGElement, svg: SVGElement, sharkSpecies: SharkSpecies[], centerX: number, centerY: number): void {
        const outerCircle = Svg.drawCircle(centerX, centerY, this.radius);
        outerCircle.setAttribute("stroke", BLACK);
        outerCircle.setAttribute("stroke-width", "2");
        outerCircle.setAttribute("fill", "none");
        g.appendChild(outerCircle);

        const numSpecies = sharkSpecies.length;
        const spacing = (2 * Math.PI) / numSpecies;

        const dot = Svg.drawCircle(centerX, centerY, 5, BLACK);
        dot.setAttribute("stroke", BLACK);
        dot.setAttribute("stroke-width", "1");
        g.appendChild(dot);

        sharkSpecies.forEach((shark, index) => {
            this.drawSharkOnRim(g, svg, shark, index, spacing);
        });
    }

    drawSharkOnRim(g: SVGGElement, svg: SVGElement, shark, index, spacing: number): void {
        const angle = index * spacing;
        const x = this.centerX + this.radius * Math.cos(angle);
        const y = this.centerY + this.radius * Math.sin(angle);
        shark.setX(x);
        shark.setY(y);
        shark.setIndex(index);
    
        const circle = Svg.drawCircle(x, y, 5, BLACK);
        shark.setNode(circle);
        circle.dataset.shark = JSON.stringify(shark.config);
    
        g.appendChild(circle);
    }

    addInteractionListeners(svg: SVGElement, g: SVGGElement, sharkSpecies: SharkSpecies[]): void {
        let viewBox = { x: 0, y: 0, width: this.svgSize, height: this.svgSize };
        let isDragging = false;
        let startX: number, startY: number;
        let rotation = 0;
    
        const style = document.createElementNS(SVG_NAMESPACE, "style");
        style.textContent = `
            .pulse {
                animation: pulse 1s infinite ease-in-out;
            }
            @keyframes pulse {
                0% { r: 5; opacity: 1; }
                50% { r: 10; opacity: 0.7; }
                100% { r: 5; opacity: 1; }
            }
        `;
        svg.appendChild(style);


        sharkSpecies.forEach(shark => {
            const node = shark.getNode();
            node.addEventListener("click", () => {
                this.updateSelection(shark);
                window.dispatchEvent(new CustomEvent("select-shark", { 
                    detail: { sharkSpecies: shark } 
                }));
            });
            node.addEventListener("mouseover", (e) => {
                const tooltip = document.createElement("div");
                tooltip.innerHTML = `${shark.commonName || shark.binomialName}`;
                tooltip.style.position = "absolute";
                tooltip.style.background = "rgba(255, 255, 255, 0.95)";
                tooltip.style.border = `1px solid #00688B`;
                tooltip.style.borderRadius = "5px";
                tooltip.style.padding = "4px 5px";
                tooltip.style.fontFamily = "'Roboto', sans-serif";
                tooltip.style.fontWeight = "550";
                tooltip.style.fontSize = "13px";
                tooltip.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
                tooltip.style.left = `${e.pageX + 10}px`;
                tooltip.style.top = `${e.pageY + 10}px`;
                document.body.appendChild(tooltip);
                node.addEventListener("mouseout", () => tooltip.remove(), { once: true });
            });
        });

        svg.addEventListener("dblclick", () => {
            // Reset viewBox to initial state
            viewBox = { x: 0, y: 0, width: this.svgSize, height: this.svgSize };
            this.updateViewBox(svg, viewBox);
    
            // Reapply any active highlights if needed
            if (this.activeTaxonomicLevel) {
                this.highlightTaxonomicLevel(this.activeTaxonomicLevel, this.activeTaxonomicValue);
            }
            if (this.activeTagCategory) {
                this.highlightTagCategory(this.activeTagCategory, this.activeTagValue);
            }
        });
    
        svg.addEventListener("wheel", (event: WheelEvent) => {
            event.preventDefault();
            const mouseX = event.clientX - svg.getBoundingClientRect().left;
            const mouseY = event.clientY - svg.getBoundingClientRect().top;
    
            if (event.ctrlKey) {
                console.log(event, event.ctrlKey)
                const scale = event.deltaY > 0 ? 1.1 : 0.9;
                viewBox.width *= scale;
                viewBox.height *= scale;
                viewBox.x += (mouseX * (1 - scale)) / (this.svgSize / viewBox.width);
                viewBox.y += (mouseY * (1 - scale)) / (this.svgSize / viewBox.height);
                this.updateViewBox(svg, viewBox);
            } else {
                const delta = -event.deltaY;
                rotation = (rotation + delta / 10) % 360;
                g.setAttribute("transform", `rotate(${rotation}, ${this.centerX}, ${this.centerY})`);
        
                const numSpecies = sharkSpecies.length;
                const spacing = 360 / numSpecies;
                let sharkIndex = Math.floor((-rotation / spacing + 1) % numSpecies);
                if (sharkIndex < 0) sharkIndex = numSpecies + sharkIndex;
                if (sharkIndex !== this.currentSharkIndex) {
                    const previousShark = sharkSpecies[this.currentSharkIndex];
                    const previousNode = previousShark?.getNode();
                    if (previousNode) {
                        // Use taxonomic color if active, otherwise default to BLACK
                        const taxonomicColor = this.getTaxonomicColor(previousShark);
                        previousNode.setAttribute("fill", taxonomicColor || BLACK);
                        previousNode.classList.remove("pulse");
                    }
                    this.reapplyHighlights(previousShark);
        
                    this.currentSharkIndex = sharkIndex;
                    const currentShark = sharkSpecies[sharkIndex];
                    const node = currentShark.getNode();
                    node.setAttribute("fill", RED); // Selected shark remains RED
                    node.classList.add("pulse");
                    this.highlightPathToShark(currentShark.binomialName, 2, BLACK);
        
                    g.removeChild(node);
                    g.appendChild(node);
        
                    this.updateSelection(currentShark);
                    window.dispatchEvent(new CustomEvent("select-shark", { 
                        detail: { sharkSpecies: currentShark } 
                    }));
                }
            }
        });

        // Pan with drag
        svg.addEventListener("mousedown", (event: MouseEvent) => {
            if (!event.ctrlKey) {
                isDragging = true;
                startX = event.clientX;
                startY = event.clientY;
            }
        });
        svg.addEventListener("mousemove", (event: MouseEvent) => {
            if (!isDragging) return;
            const dx = (event.clientX - startX) * (viewBox.width / this.svgSize);
            const dy = (event.clientY - startY) * (viewBox.height / this.svgSize);
            viewBox.x -= dx;
            viewBox.y -= dy;
            startX = event.clientX;
            startY = event.clientY;
            this.updateViewBox(svg, viewBox);
        });
        svg.addEventListener("mouseup", () => (isDragging = false));
        svg.addEventListener("mouseleave", () => (isDragging = false));
    
        // Pinch-to-zoom and two-finger pan (touch devices)
        let initialDistance: number | null = null;
        let initialCenter: { x: number, y: number } | null = null;
        svg.addEventListener("touchstart", (event: TouchEvent) => {
            if (event.touches.length === 2) {
                initialDistance = this.getTouchDistance(event.touches);
                initialCenter = this.getTouchCenter(event.touches, svg);
            }
        });
        svg.addEventListener("touchmove", (event: TouchEvent) => {
            if (event.touches.length === 2 && initialDistance && initialCenter) {
                const newDistance = this.getTouchDistance(event.touches);
                const scale = initialDistance / newDistance;
                const newCenter = this.getTouchCenter(event.touches, svg);
    
                viewBox.width *= scale;
                viewBox.height *= scale;
                viewBox.x += (initialCenter.x * (1 - scale)) / (this.svgSize / viewBox.width);
                viewBox.y += (initialCenter.y * (1 - scale)) / (this.svgSize / viewBox.height);
    
                const dx = (newCenter.x - initialCenter.x) * (viewBox.width / this.svgSize);
                const dy = (newCenter.y - initialCenter.y) * (viewBox.height / this.svgSize);
                viewBox.x -= dx;
                viewBox.y -= dy;
    
                this.updateViewBox(svg, viewBox);
                initialDistance = newDistance;
                initialCenter = newCenter;
            }
        });
        svg.addEventListener("touchend", () => {
            initialDistance = null;
            initialCenter = null;
        });
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
            newLine.setAttribute("stroke", BLACK);
            newLine.setAttribute("stroke-linecap", "round");
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
                    firstArc.setAttribute("stroke", BLACK);
                    firstArc.setAttribute("stroke-linecap", "round");
                    secondArc.setAttribute("stroke", BLACK);
                    secondArc.setAttribute("stroke-linecap", "round");
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

    updateSelection(selectedShark) {
        const sharkSpecies = this.getSharkSpeciesList();
        sharkSpecies.forEach(shark => {
            const node = shark.getNode();
            if (shark === selectedShark) {
                node.setAttribute("fill", RED);
                node.classList.add("pulse");
            } else {
                const taxonomicColor = this.getTaxonomicColor(shark);
                node.setAttribute("fill", taxonomicColor || BLACK);
                node.classList.remove("pulse");
            }
        });
    }

    getTouchCenter(touches: TouchList, svg: SVGElement): { x: number, y: number } {
        const rect = svg.getBoundingClientRect();
        return {
            x: (touches[0].clientX + touches[1].clientX) / 2 - rect.left,
            y: (touches[0].clientY + touches[1].clientY) / 2 - rect.top
        };
    }
    
    getTouchDistance(touches: TouchList): number {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    updateViewBox(svg: SVGElement, viewBox: { x: number, y: number, width: number, height: number }): void {
        svg.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    }

    /*----------------------------------------|
    |           TAXONOMIC GROUPS              |
    |----------------------------------------*/

    initializeTaxonomicLevels(): void {
        const levels = Object.values(TAXONOMIC_LEVELS);
        
        levels.forEach((level, index) => {
            this.taxonomicLevels.set(level, {
                species: [],
                color: TAXONOMIC_COLORS[level]
            });
        });
        
        const allSpecies = this.getSharkSpeciesList(this.root);
        this.collectTaxonomicData(allSpecies);
    }

    collectTaxonomicData(species: SharkSpecies[]) {
        species.forEach(shark => {
            Object.values(TAXONOMIC_LEVELS).forEach(level => {
                const levelData = this.taxonomicLevels.get(level);
                if (levelData && shark[level]) {
                    // Only add species if it hasn't been added yet
                    if (!levelData.species.some(s => s.binomialName === shark.binomialName)) {
                        levelData.species.push(shark);
                    }
                }
            });
        });
    }

    highlightTaxonomicLevel(level: string, value?: string) {
        this.activeTaxonomicLevel = level;
        this.activeTaxonomicValue = value || null;
        const levelData = this.taxonomicLevels.get(level);
        if (!levelData) return;
    
        const speciesToHighlight = value 
            ? levelData.species.filter(s => s[level] === value)
            : levelData.species;
    
        this.getSharkSpeciesList().forEach(shark => this.clearHighlightPath(shark));
    
        speciesToHighlight.forEach(shark => {
            shark.highlightNode(levelData.color);
            const hasTag = this.activeTagCategory && (!this.activeTagValue || shark.tags.includes(this.activeTagValue));
            shark.highlightParentPath(3, levelData.color, hasTag ? "5,5" : "solid");
            let parent = shark.getParent();
            const targetLevelIndex =  Object.values(TAXONOMIC_LEVELS).indexOf(level as TAXONOMIC_LEVELS);
            let currentLevelIndex = 0;
            while (parent && currentLevelIndex < targetLevelIndex) {
                parent.highlightParentPath(3, levelData.color, hasTag ? "5,5" : "solid");
                parent = parent.getParent();
                currentLevelIndex++;
            }
        });
    }

    /*----------------------------------------|
    |            TAG CATEGORIES               |
    |----------------------------------------*/

    initializeTagCategories(): void {
        const sharedCategories = [
            "conservationStatus",
            "reproductiveStrategy", 
            "temperatureRegulation",
            "feedingBehavior",
            "groupBehavior",
            "behavior",
            "numGills", 
            "isBioluminescent",
            "hasSpiracles",
            "numDorsalFins",
            "hasFlattenedBody"
        ];

        const sharkCategories = [
            "caudalFinShape",
            "hasDorsalFinSpines",
            "hasProximalDorsalFins",
            "analFin",
            "nictitatingMembrane",
            "caudalFinShape",
            "mouthInFrontOfEyes",
        ];

        const rayCategories = [
            "tailSpines",
        ];

        const categories = [
            ...sharedCategories,
            ...(this.speciesType === SPECIES_TYPE.SHARKS ? sharkCategories : rayCategories)
        ];
        
        categories.forEach((category, _index) => {
            this.tagCategories.set(category, {
                species: []
            });
        });
        
        const allSpecies = this.getSharkSpeciesList(this.root);
        this.collectTagData(allSpecies);
    }

    collectTagData(species: SharkSpecies[]) {
        species.forEach(shark => {
            shark.tags.forEach(tag => {
                const category = this.getTagCategory(tag);
                const categoryData = this.tagCategories.get(category);
                if (categoryData && !categoryData.species.some(s => s.binomialName === shark.binomialName)) {
                    categoryData.species.push(shark);
                }
            });
        });
    }

    getTagCategory(tag: string): string {
        const tagEnums: { [key: string]: string[] } = {
            "conservationStatus": Object.values(CONSERVATION_STATUS),
            "reproductiveStrategy": Object.values(REPRODUCTIVE_STRATEGY),
            "temperatureRegulation": Object.values(TEMPERATURE_REGULATION),
            "feedingBehavior": Object.values(FEEDING_BEHAVIOR),
            "groupBehavior": Object.values(GROUP_BEHAVIOR),
            "behavior": Object.values(BEHAVIOR),
            "oceanZone": Object.values(OCEAN_ZONE),
            "geographicalDistribution": Object.values(GEOGRAPHICAL_DISTRIBUTION),
            "habitat": Object.values(HABITAT),
            "waterColumn": Object.values(WATER_COLUMN),
            "physicalCharacteristic": Object.values(PHYSICAL_CHARACTERISTIC),
            "numGills": Object.values(NUM_GILLS),
            "numDorsalFins": Object.values(NUM_DORSAL_FINS),
            "analFin": Object.values(ANAL_FIN),
            "nictitatingMembrane": Object.values(NICTITATING_MEMBRANE),
            "caudalFinShape": Object.values(CAUDAL_FIN_SHAPE),
            "mouthInFrontOfEyes": Object.values(MOUTH_IN_FRONT_OF_EYES),
            "isBioluminescent": Object.values(BIOLUMINESCENT),
            "hasDorsalFinSpines": Object.values(DORSAL_FIN_SPINES),
            "hasProximalDorsalFins": Object.values(PROXIMAL_DORSAL_FINS),
            "tailSpines": Object.values(TAIL_SPINES),
            "hasSpiracles": Object.values(SPIRACLES),
            "hasFlattenedBody": Object.values(FLATTENED_BODY)

        };
        for (const [category, values] of Object.entries(tagEnums)) {
            if (values.includes(tag)) return category;
        }
        return "";
    }

    highlightTagCategory(category: string, value?: string) {
        this.activeTagCategory = category;
        this.activeTagValue = value || null;
        const categoryData = this.tagCategories.get(category);
        if (!categoryData) return;
    
        const speciesToHighlight = value 
            ? categoryData.species.filter(s => s.tags.includes(value))
            : categoryData.species.filter(s => s.tags.some(tag => this.getTagCategory(tag) === category));
    
        // Reset paths but preserve node colors
        this.getSharkSpeciesList().forEach(shark => this.clearHighlightPath(shark, true));
    
        // Highlight paths for tagged species
        speciesToHighlight.forEach(shark => {
            const taxonomicColor = this.getTaxonomicColor(shark) || BLACK;
            shark.highlightParentPath(3, taxonomicColor, "5,5"); // Apply dashed line for tag
        });
    
        // Reapply taxonomic colors to all nodes
        if (this.activeTaxonomicLevel) {
            const levelData = this.taxonomicLevels.get(this.activeTaxonomicLevel);
            if (levelData) {
                const speciesToColor = this.activeTaxonomicValue
                    ? levelData.species.filter(s => s[this.activeTaxonomicLevel] === this.activeTaxonomicValue)
                    : levelData.species;
                this.getSharkSpeciesList().forEach(shark => {
                    const color = speciesToColor.includes(shark) ? levelData.color : BLACK;
                    shark.highlightNode(color);
                });
            }
        }
    }
    getTaxonomicColor(shark: SharkSpecies): string | null {
        if (this.activeTaxonomicLevel) {
            const levelData = this.taxonomicLevels.get(this.activeTaxonomicLevel);
            if (levelData && (!this.activeTaxonomicValue || shark[this.activeTaxonomicLevel] === this.activeTaxonomicValue)) {
                return levelData.color;
            }
        }
        return null;
    }

    /*----------------------------------------|
    |           PATH HIGHLIGHTING             |
    |----------------------------------------*/

    highlightPathToShark(binomialName: string, strokeWidth = 2, color = BLACK): void {
        const sharkSpecies = this.getSharkSpeciesList();
        const shark = sharkSpecies.find((s) => s.binomialName === binomialName);
        if (!shark) return;
        shark.highlightNode(color);
        shark.highlightParentPath(strokeWidth, color, "solid");
        let sharkParent = shark.getParent();
        while (sharkParent) {
            sharkParent.highlightParentPath(strokeWidth, color, "solid");
            sharkParent = sharkParent.getParent();
        }
    }

    clearHighlightPath(shark: SharkSpecies, preserveNodeColor: boolean = false): void {
        const node = shark.getNode();
        if (node && !preserveNodeColor) {
            node.setAttribute("fill", BLACK);
        }
    
        const getPathStyle = (segments: (SVGLineElement | SVGPathElement)[], sharksToCheck: SharkSpecies[]) => {
            let strokeColor = BLACK;
            let strokeWidth = "1";
            let dashArray = "";
    
            if (this.activeTaxonomicLevel) {
                const levelData = this.taxonomicLevels.get(this.activeTaxonomicLevel);
                if (levelData && sharksToCheck.some(s => !this.activeTaxonomicValue || s[this.activeTaxonomicLevel] === this.activeTaxonomicValue)) {
                    strokeColor = levelData.color;
                    strokeWidth = "3";
                }
            }
    
            if (this.activeTagCategory) {
                const hasTagInCategory = sharksToCheck.some(s => s.tags.some(tag => this.getTagCategory(tag) === this.activeTagCategory));
                if (hasTagInCategory && (!this.activeTagValue || sharksToCheck.some(s => s.tags.includes(this.activeTagValue)))) {
                    dashArray = "5,5";
                    strokeWidth = "3";
                }
            }
    
            return { strokeColor, strokeWidth, dashArray };
        };
    
        const applyStyle = (segments: (SVGLineElement | SVGPathElement)[], style: { strokeColor: string, strokeWidth: string, dashArray: string }) => {
            segments.forEach(segment => {
                segment.setAttribute("stroke", style.strokeColor);
                segment.setAttribute("stroke-width", style.strokeWidth);
                if (style.dashArray) {
                    segment.setAttribute("stroke-dasharray", style.dashArray);
                } else {
                    segment.removeAttribute("stroke-dasharray");
                }
            });
        };
    
        const allSpecies = this.getSharkSpeciesList();
    
        // Style direct path
        const directStyle = getPathStyle(shark.getParentPath(), [shark]);
        applyStyle(shark.getParentPath(), directStyle);
    
        // Style parent paths
        let sharkParent = shark.getParent();
        while (sharkParent) {
            const relatedSharks = allSpecies.filter(s => {
                let p = s.getParent();
                while (p) {
                    if (p === sharkParent) return true;
                    p = p.getParent();
                }
                return false;
            });
            const parentStyle = getPathStyle(sharkParent.getParentPath(), relatedSharks);
            applyStyle(sharkParent.getParentPath(), parentStyle);
            sharkParent = sharkParent.getParent();
        }
    }
    
    reapplyHighlights(shark: SharkSpecies): void {
        const node = shark.getNode();
        if (node) node.setAttribute("fill", BLACK);
    
        const getPathStyle = (segments: (SVGLineElement | SVGPathElement)[], sharksToCheck: SharkSpecies[]) => {
            let strokeColor = BLACK;
            let strokeWidth = "1";
            let dashArray = "";
    
            if (this.activeTaxonomicLevel) {
                const levelData = this.taxonomicLevels.get(this.activeTaxonomicLevel);
                if (levelData && sharksToCheck.some(s => !this.activeTaxonomicValue || s[this.activeTaxonomicLevel] === this.activeTaxonomicValue)) {
                    strokeColor = levelData.color;
                    strokeWidth = "3";
                }
            }
    
            if (this.activeTagCategory) {
                const hasTagInCategory = sharksToCheck.some(s => s.tags.some(tag => this.getTagCategory(tag) === this.activeTagCategory));
                if (hasTagInCategory && (!this.activeTagValue || sharksToCheck.some(s => s.tags.includes(this.activeTagValue)))) {
                    dashArray = "5,5";
                    strokeWidth = "3";
                }
            }
    
            return { strokeColor, strokeWidth, dashArray };
        };
    
        const applyStyle = (segments: (SVGLineElement | SVGPathElement)[], style: { strokeColor: string, strokeWidth: string, dashArray: string }) => {
            segments.forEach(segment => {
                segment.setAttribute("stroke", style.strokeColor);
                segment.setAttribute("stroke-width", style.strokeWidth);
                if (style.dashArray) {
                    segment.setAttribute("stroke-dasharray", style.dashArray);
                } else {
                    segment.removeAttribute("stroke-dasharray");
                }
            });
        };
    
        const directStyle = getPathStyle(shark.getParentPath(), [shark]);
        applyStyle(shark.getParentPath(), directStyle);
    
        let sharkParent = shark.getParent();
        const allSpecies = this.getSharkSpeciesList();
        while (sharkParent) {
            const relatedSharks = allSpecies.filter(s => {
                let p = s.getParent();
                while (p) {
                    if (p === sharkParent) return true;
                    p = p.getParent();
                }
                return false;
            });
            const parentStyle = getPathStyle(sharkParent.getParentPath(), relatedSharks);
            applyStyle(sharkParent.getParentPath(), parentStyle);
            sharkParent = sharkParent.getParent();
        }
    }

    clearAllHighlights() {
        this.activeTaxonomicLevel = null;
        this.activeTaxonomicValue = null;
        this.getSharkSpeciesList().forEach(shark => this.clearHighlightPath(shark));
    }
}
