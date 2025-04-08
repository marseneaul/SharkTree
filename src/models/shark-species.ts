import { sha256 } from "js-sha256";
import { SharkConfig } from "../interfaces/shark-config";
import { SharkTreeNode } from "./shark-tree-node";
import { DEFAULT_TAGS, getEnumCategory } from "../constants/enums";

// SharkTreeLeafNode
export class SharkSpecies {
    config: SharkConfig
    parent: SharkTreeNode|null

    commonName: string|undefined
    alternativeNames: string[]
    binomialName: string|undefined

    imageUrl?: string

    domain:	string
    kingdom: string
    phylum:	string
    class: string
    subclass?: string
    subdivision?: string
    superorder?: string
    order: string
    family: string
    genus: string
    species: string

    tags: string[]

    x: number
    y: number
    parentPath: (SVGLineElement|SVGPathElement)[]
    node: SVGCircleElement

    hash: string
    index: number

    constructor(config: SharkConfig, parent: SharkTreeNode|null = null) {
        this.config = config;
        this.parent = parent;
        this.alternativeNames = [];

        this.parentPath = [];
        this.tags = config.tags || []; 

        this.buildShark();

        this.hash = this.getHash();
    }

    /*----------------------------------------|
    |                GETTERS                  |
    |----------------------------------------*/

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    getParentPath(): (SVGLineElement|SVGPathElement)[] {
        return this.parentPath;
    }

    getLastParentPathSegment(): (SVGLineElement|SVGPathElement) {
        return this.parentPath[this.parentPath.length - 1];
    }

    getParent(): SharkTreeNode|null {
        return this.parent;
    }

    getNode(): SVGCircleElement|undefined {
        return this.node;
    }

    getHash(): string {
        if (this.hash) return this.hash;
        const jsonString = JSON.stringify(this.config);
        return sha256(jsonString).toString();
    }

    getHashChain(): string[] {
        let hashChain = [this.getHash()];
        let parent = this.getParent();
        while (parent !== null) {
            hashChain.push(parent.getHash());
            parent = parent.getParent();
        }
        return hashChain;
    }

    getParentHash(): string|undefined {
        return this.parent?.getHash();
    }

    /*----------------------------------------|
    |                SETTERS                  |
    |----------------------------------------*/

    setX(x: number): void {
        this.x = x;
    }

    setY(y: number): void {
        this.y = y;
    }

    setNode(node: SVGCircleElement): void {
        this.node = node;
    }

    setIndex(index: number): void {
        this.index = index;
    }

    /*----------------------------------------|
    |                ADDERS                   |
    |----------------------------------------*/

    addParentPathSegment(parentPathSegment: SVGLineElement|SVGPathElement): void {
        this.parentPath.push(parentPathSegment);
    }

    addParentPathToParentChildPath(): void {
        const parentPath = this.getParentPath();
        this.parent?.addChildPath(parentPath);
    }

    /*----------------------------------------|
    |              HIGHLIGHTING               |
    |----------------------------------------*/

    highlightNode(color = "black"): void {
        this.node?.setAttribute("fill", color);
    }
    
    highlightParentPath(strokeWidth = 3, color = "black", dashPattern: string = "solid"): void {
        this.parentPath.forEach(segment => segment.setAttribute("stroke", color));
        this.parentPath.forEach(segment => segment.setAttribute("stroke-width", `${strokeWidth}`));
        this.parentPath.forEach(segment => dashPattern === "solid" ? segment.removeAttribute("stroke-dasharray") : segment.setAttribute("stroke-dasharray", dashPattern));
    }

    buildShark(): void {
        this.commonName = this.config.commonName;
        this.alternativeNames = this.config.alternativeNames || [];
        this.binomialName = this.config.binomialName;

        if (this.config.imageUrl) this.imageUrl = this.config.imageUrl;

        this.domain = this.config.domain;
        this.kingdom = this.config.kingdom;
        this.phylum = this.config.phylum;
        this.class = this.config.class;
        if (this.config.subclass) this.subclass = this.config.subclass;
        if (this.config.subdivision) this.subdivision = this.config.subdivision;
        if (this.config.superorder) this.superorder = this.config.superorder;
        this.order = this.config.order;
        this.family = this.config.family;
        this.genus = this.config.genus;
        this.species = this.config.species;
        this.buildTags();
    }

    buildTags(): void {
        this.tags = this.config.tags || [];
        const existingCategories = new Set<string>();
        this.tags.forEach(tag => {
            const category = getEnumCategory(tag);
            if (category) {
                existingCategories.add(category);
            }
        });
    
        const tagsToAdd = DEFAULT_TAGS.filter(defaultTag => {
            const category = getEnumCategory(defaultTag);
            return category && !existingCategories.has(category);
        });

        this.tags = [...this.tags, ...tagsToAdd];
    }

    /*----------------------------------------|
    |              PRINTING                   |
    |----------------------------------------*/

    getFormattedString(): string {
        const formattedString = `Common Name: ${this.commonName}<br>Binomial Name: ${this.binomialName}<br>Alternative Names: ${this.getAlternativeNamesSentence()}<br><br>Domain: ${this.domain}<br>Kingdom: ${this.kingdom}<br>Phylum: ${this.phylum}<br>Class: ${this.class}<br>Order: ${this.order}<br>Family: ${this.family}<br>Genus: ${this.genus}<br>Species: ${this.species}${this.tags.length ? `<br><br>Tags: ${this.tags.join(", ")}` : ""}`;
        return formattedString;
    }

    getAlternativeNamesSentence(): string {
        const numAlternativeNames = this.alternativeNames.length;
        if (numAlternativeNames) {
            let alternativeNamesString = "";
            this.alternativeNames.forEach((alternativeName, i) => {
                alternativeNamesString += `${alternativeName}`;
                if (i !== this.alternativeNames.length - 1) {
                    const includeComma = numAlternativeNames !== 2;
                    const includeOr = i === numAlternativeNames - 2;
                    alternativeNamesString += `${includeComma ? "," : ""} ${includeOr ? "or " : ""}`;
                }
            });
            return `The ${this.commonName} is also known as the ${alternativeNamesString}.`;
        }
        else return `The ${this.commonName} has no known alternative names.`;
    }
}
