import { sha256 } from "js-sha256";
import { SharkConfig } from "../interfaces/shark-config";
import { SharkTreeNode } from "./shark-tree-node";
import { BEHAVIOR, BIOLUMINESCENT, CONSERVATION_STATUS, DEFAULT_TAGS, DORSAL_FIN_SPINES, FLATTENED_BODY, getEnumCategory, NUM_GILLS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION } from "../constants/enums";

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

    getRelatedSpecies(allSpecies: SharkSpecies[]): SharkSpecies[] {
        return allSpecies.filter(s => 
            s !== this && 
            (s.genus === this.genus || s.family === this.family) &&
            s.binomialName !== this.binomialName
        ).slice(0, 3); // Limit to 3 for brevity
    }

    hasUnusualTemperatureRegulation(): boolean {
        return this.tags.some(tag => [TEMPERATURE_REGULATION.ENDOTHERMIC, TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC].includes(tag as TEMPERATURE_REGULATION));
    }

    hasCriticalConservationStatus(): boolean {
        return this.tags.some(tag => [
            CONSERVATION_STATUS.CR, 
            CONSERVATION_STATUS.EN, 
            CONSERVATION_STATUS.VU
        ].includes(tag as CONSERVATION_STATUS));
    }
    
    hasUniquePhysicalTrait(): boolean {
        return this.tags.some(tag => [
            BIOLUMINESCENT.YES,
            DORSAL_FIN_SPINES.YES,
            DORSAL_FIN_SPINES.ONLY_ON_FIRST,
            FLATTENED_BODY.YES,
            NUM_GILLS.SIX,
            NUM_GILLS.SEVEN
        ].includes(tag as any));
    }
    
    hasNotableReproduction(): boolean {
        return this.tags.some(tag => [
            REPRODUCTIVE_STRATEGY.OVIPAROUS,
            REPRODUCTIVE_STRATEGY.VIVIPAROUS,
            REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
            REPRODUCTIVE_STRATEGY.OOPHAGY,
            REPRODUCTIVE_STRATEGY.EMBRYOPHAGY
        ].includes(tag as REPRODUCTIVE_STRATEGY));
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
    
    getFormattedString(allSpecies: SharkSpecies[]): string {
        const relatedSpecies = this.getRelatedSpecies(allSpecies);

        const alternativeNamesSentence = this.getAlternativeNamesSentence();
        const alternativeNamesString = alternativeNamesSentence.length > 0 
        ? `<strong>Alternative Names:</strong> ${alternativeNamesSentence}` 
        : "";

        const conservationStatusTags = this.tags.filter(tag => [
            CONSERVATION_STATUS.CR, CONSERVATION_STATUS.EN, CONSERVATION_STATUS.VU, CONSERVATION_STATUS.DD, CONSERVATION_STATUS.LC, CONSERVATION_STATUS.EW, CONSERVATION_STATUS.NT
        ].includes(tag as any)).slice(0, 1);
        const conservationStatusString = conservationStatusTags.length > 0 
            ? `<div class="section"><strong>Conservation Status:</strong> ${conservationStatusTags.join(", ")}</div>` 
            : "";

        const descriptionSentence = this.getDescription();
        const descriptionString = descriptionSentence.length > 0 
        ? `<div class="section"><strong>Description:</strong> ${descriptionSentence}</div>` 
        : "";
        
        return `
            <br></br>
            <h2>${this.commonName}</h2>
            <div class="section">
                <strong>Binomial Name:</strong> ${this.binomialName}
                <br>${alternativeNamesString}
            </div>
            ${conservationStatusString}
            ${descriptionString}
            <div class="section">
                <strong>Taxonomy:</strong><br>
                Domain: ${this.domain}<br>
                Kingdom: ${this.kingdom}<br>
                Phylum: ${this.phylum}<br>
                Class: ${this.class}<br>
                Order: ${this.order}<br>
                Family: ${this.family}<br>
                Genus: ${this.genus}<br>
                Species: ${this.species}
            </div>
            <div class="section">
                <strong>Related Species:</strong>
                ${relatedSpecies.length > 0 ? `<ul>${relatedSpecies.map(s => `<li>${s.commonName} (${s.binomialName})</li>`).join("")}</ul>` : "None in this dataset"}
            </div>
        `;
    }

    getAlternativeNamesSentence(): string {
        let alternativeNamesString = "";
        const numAlternativeNames = this.alternativeNames.length;
        if (numAlternativeNames) {
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
        return alternativeNamesString;
    }

    getDescription(): string {
        let description = "";
        const addSentence = (sentence: string) => {
            if (description) description += " ";
            description += sentence;
        };
    
        // Temperature Regulation
        if (this.hasUnusualTemperatureRegulation()) {
            if (this.tags.includes(TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC)) {
                addSentence(`The ${this.commonName} maintains warm muscles in key regions of its body, aiding its agility in cooler waters.`);
            } else if (this.tags.includes(TEMPERATURE_REGULATION.ENDOTHERMIC)) {
                addSentence(`Unlike most sharks, the ${this.commonName} is fully endothermic, keeping its body warmer than the surrounding ocean.`);
            }
        } else if (this.tags.includes(TEMPERATURE_REGULATION.ECTOTHERMIC)) {
            addSentence(`The ${this.commonName} relies on the ocean's temperature to regulate its body heat, typical of many shark species.`);
        }
    
        // Conservation Status
        const conservationTag = this.tags.find(tag => Object.values(CONSERVATION_STATUS).includes(tag as CONSERVATION_STATUS));
        if (conservationTag) {
            switch (conservationTag) {
                case CONSERVATION_STATUS.CR:
                    addSentence(`Sadly, this species is critically endangered, facing a high risk of extinction in the wild.`);
                    break;
                case CONSERVATION_STATUS.EN:
                    addSentence(`It’s listed as endangered, making conservation efforts crucial for its survival.`);
                    break;
                case CONSERVATION_STATUS.VU:
                    addSentence(`The ${this.commonName} is vulnerable to population declines due to environmental pressures.`);
                    break;
                case CONSERVATION_STATUS.NT:
                    addSentence(`While not yet endangered, it’s considered near threatened and warrants close monitoring.`);
                    break;
                case CONSERVATION_STATUS.LC:
                    addSentence(`Fortunately, it’s currently of least concern, thriving in its natural habitat.`);
                    break;
                case CONSERVATION_STATUS.DD:
                    addSentence(`Little is known about its status—data is deficient, leaving its future uncertain.`);
                    break;
            }
        }

        // Physical Traits
        if (this.hasUniquePhysicalTrait()) {
            if (this.tags.includes(BIOLUMINESCENT.YES)) {
                addSentence(`It glows in the dark thanks to bioluminescence, a stunning deep-sea adaptation.`);
            } else if (this.tags.includes(FLATTENED_BODY.YES)) {
                addSentence(`Its flattened body lets it hug the ocean floor, perfect for ambush hunting.`);
            } else if (this.tags.includes(NUM_GILLS.SIX) || this.tags.includes(NUM_GILLS.SEVEN)) {
                addSentence(`With ${this.tags.includes(NUM_GILLS.SEVEN) ? "seven" : "six"} gill slits, it stands out from the typical five-gilled sharks.`);
            }
        }

        // Reproduction
        if (this.hasNotableReproduction()) {
            const reproTag = this.tags.find(tag => Object.values(REPRODUCTIVE_STRATEGY).includes(tag as REPRODUCTIVE_STRATEGY));
            switch (reproTag) {
                case REPRODUCTIVE_STRATEGY.OVIPAROUS:
                    if (this.order === "Heterodontiformes") {
                        addSentence(`The ${this.commonName} produces spiral-shaped egg cases with tendrils that cling to rocky crevices, safeguarding its young in a horn shark’s signature style.`);
                    } else {
                        addSentence(`The ${this.commonName} lays eggs in tough, leathery cases—sometimes called mermaid’s purses—that anchor to the ocean floor, protecting its young until they hatch.`);
                    }
                    break;
                case REPRODUCTIVE_STRATEGY.VIVIPAROUS:
                    addSentence(`This shark gives birth to live young, nourishing them through a placental-like connection in the womb, much like mammals do.`);
                    break;
                case REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS:
                    addSentence(`Its eggs hatch inside the mother’s body, and the pups emerge fully formed, ready to face the ocean after a sheltered start.`);
                    break;
                case REPRODUCTIVE_STRATEGY.EMBRYTROPHY:
                    addSentence(`The ${this.commonName} sustains its embryos with a rich yolk supply, a nurturing strategy that ensures robust development before birth.`);
                    break;
                case REPRODUCTIVE_STRATEGY.PARTHENOGENESIS:
                    addSentence(`In a rare twist, this shark can reproduce without a mate, its females producing offspring from unfertilized eggs—a marvel of survival in isolation.`);
                    break;
                case REPRODUCTIVE_STRATEGY.OOPHAGY:
                    addSentence(`Its embryos feast on unfertilized eggs within the womb, a fierce intrauterine competition where only the strongest pups survive to be born.`);
                    break;
                case REPRODUCTIVE_STRATEGY.EMBRYOPHAGY:
                    addSentence(`The ${this.commonName} takes sibling rivalry to the extreme: its embryos cannibalize each other in the womb, leaving only the toughest to emerge.`);
                    break;
                case REPRODUCTIVE_STRATEGY.UNKNOWN:
                    addSentence(`How this shark brings new life into the world remains a mystery, cloaking its reproductive habits in oceanic secrecy.`);
                    break;
            }
        }
    
        // Behavior
        const behaviorTag = this.tags.find(tag => Object.values(BEHAVIOR).includes(tag as BEHAVIOR));
        if (behaviorTag === BEHAVIOR.MIGRATING) {
            addSentence(`This shark is a long-distance traveler, migrating across vast ocean expanses.`);
        } else if (behaviorTag === BEHAVIOR.BREACHING) {
            addSentence(`It’s known to leap dramatically out of the water, a behavior called breaching.`);
        }
    
        // Fallback if description is still empty
        if (!description) {
            addSentence(`The ${this.commonName} is a fascinating member of the ${this.family} family, thriving in the oceans with its unique adaptations.`);
        }
    
        return description;
    }
}
