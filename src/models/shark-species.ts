import { sha256 } from "js-sha256";
import { SharkConfig } from "../interfaces/shark-config";
import { SharkTreeNode } from "./shark-tree-node";
import { BEHAVIOR, BIOLUMINESCENT, CONSERVATION_STATUS, DEFAULT_TAGS, DORSAL_FIN_SPINES, FLATTENED_BODY, getEnumCategory, NUM_GILLS, REPRODUCTIVE_STRATEGY, SPECIES_TYPE, TEMPERATURE_REGULATION, FEEDING_BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, ANAL_FIN, SPIRACLES, NICTITATING_MEMBRANE, CAUDAL_FIN_SHAPE, MOUTH_IN_FRONT_OF_EYES, PROXIMAL_DORSAL_FINS, HABITAT, WATER_COLUMN, PHYSICAL_CHARACTERISTIC, GEOGRAPHICAL_DISTRIBUTION, OCEAN_ZONE } from "../constants/enums";
import { getIUCNGraphic, getIUCNDescription } from "../utils/iucn-graphics";

// SharkTreeLeafNode
export class SharkSpecies {
    config: SharkConfig
    parent: SharkTreeNode|null
    speciesType: SPECIES_TYPE

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
    depthRange?: string

    x: number
    y: number
    parentPath: (SVGLineElement|SVGPathElement)[]
    node: SVGCircleElement

    hash: string
    index: number

    constructor(config: SharkConfig, parent: SharkTreeNode|null = null, speciesType = SPECIES_TYPE.SHARKS) {
        this.config = config;
        this.parent = parent;
        this.alternativeNames = [];
        this.speciesType = speciesType;

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
    
    highlightParentPathWithOpacity(strokeWidth = 3, color = "black", dashPattern: string = "solid", opacity = 1): void {
        this.parentPath.forEach(segment => segment.setAttribute("stroke", color));
        this.parentPath.forEach(segment => segment.setAttribute("stroke-width", `${strokeWidth}`));
        this.parentPath.forEach(segment => segment.setAttribute("stroke-opacity", `${opacity}`));
        this.parentPath.forEach(segment => dashPattern === "solid" ? segment.removeAttribute("stroke-dasharray") : segment.setAttribute("stroke-dasharray", dashPattern));
    }

    buildShark(): void {
        this.commonName = this.config.commonName;
        this.alternativeNames = this.config.alternativeNames || [];
        this.binomialName = this.config.binomialName;

        if (this.config.imageUrl) this.imageUrl = this.config.imageUrl;
        if (this.config.depthRange) this.depthRange = this.config.depthRange;

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
            if (category) existingCategories.add(category);
        });
        const defaultTags = this.speciesType === SPECIES_TYPE.RAYS ? DEFAULT_TAGS.rays : (this.speciesType === SPECIES_TYPE.SHARKS ? DEFAULT_TAGS.sharks : DEFAULT_TAGS.chimaeras);
        const tagsToAdd = defaultTags.filter(defaultTag => {
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
            ? `<div class="section conservation-status">
                <strong>Conservation Status:</strong> 
                <span class="iucn-status">
                    <span class="iucn-text">${getIUCNDescription(conservationStatusTags[0] as CONSERVATION_STATUS)}</span>
                    ${getIUCNGraphic(conservationStatusTags[0] as CONSERVATION_STATUS)}
                </span>
            </div>` 
            : "";
        const depthRangeString = this.depthRange
            ? `<div class="section"><strong>Depth Range:</strong> ${this.depthRange}</div>`
            : `<div class="section"><strong>Depth Range:</strong> Unknown</div>`;
        const descriptionSentence = this.getDescription();
        const descriptionString = descriptionSentence.length > 0 
        ? `<div class="section"><strong>Description:</strong> ${descriptionSentence}</div>` 
        : "";
        
        return `
            <h2>${this.commonName}</h2>
            <div class="section">
                <strong>Binomial Name:</strong> ${this.binomialName}
                <br>${alternativeNamesString}
            </div>
            ${conservationStatusString}
            ${depthRangeString}
            ${descriptionString}
            <div class="section">
                <strong>Taxonomy:</strong><br>
                Domain: ${this.domain}${this.getCommonNameFromTaxonomicGroup(this.domain) ?? ''}<br>
                Kingdom: ${this.kingdom}${this.getCommonNameFromTaxonomicGroup(this.kingdom) ?? ''}<br>
                Phylum: ${this.phylum}${this.getCommonNameFromTaxonomicGroup(this.phylum) ?? ''}<br>
                Class: ${this.class}${this.getCommonNameFromTaxonomicGroup(this.class) ?? ''}<br>
                Order: ${this.order}${this.getCommonNameFromTaxonomicGroup(this.order) ?? ''}<br>
                Family: ${this.family}${this.getCommonNameFromTaxonomicGroup(this.family) ?? ''}<br>
                Genus: ${this.genus}${this.getCommonNameFromTaxonomicGroup(this.genus) ?? ''}<br>
                Species: ${this.species}
            </div>
            <div class="section">
                <strong>Related Species:</strong>
                ${relatedSpecies.length > 0 ? `<ul>${relatedSpecies.map(s => `<li>${s.commonName} (${s.binomialName})</li>`).join("")}</ul>` : "None in this dataset"}
            </div>
        `;
    }

    private getCommonNameFromTaxonomicGroup(taxonomicGroup: string): string {
        const commonNames: { [key: string]: string } = {
            "Eukaryota": "Eukaryotes",
            "Animalia": "Animals",

            "Chordata": "Vertebrates",

            "Chondrichthyes": "Cartilagenous Fishes",

            // ----------------------------------//

            "Carcharhiniformes": "Ground Sharks",
            "Lamniformes": "Mackerel Sharks", 
            "Squatiniformes": "Angelsharks",
            "Heterodontiformes": "Bullhead Sharks",
            "Orectolobiformes": "Carpet Sharks",
            "Pristiophoriformes": "Sawsharks",
            "Squaliformes": "Dogfishes",

            "Rajiformes": "Skates",
            "Rhinopristiformes": "Guitarfishes and Sawfishes",
            "Torpediniformes": "Torpedo Rays",
            "Myliobatiformes": "Whiptail Rays",

            "Chimaeriformes": "Chimaeras",

            // ----------------------------------//


            "Carcharhinidae": "Requiem Sharks",
            "Triakidae": "Houndsharks",
            "Sphyrnidae": "Hammerhead Sharks",
            "Hexanchidae": "Cow Sharks",
            "Chlamydoselachidae": "Frilled Sharks",
            "Ginglymostomatidae": "Nurse Sharks",
            "Rhincodontidae": "Whale Sharks",
            "Etmopteridae": "Lanternsharks",
            "Somniosidae": "Sleeper Sharks",
            "Scyliorhinidae": "Catsharks",
            "Oxynotus": "Roughsharks",
            "Alopiidae": "Threshers",
            "Orectolobus": "Wobbegongs",
            "Hemigaleidae": "Weasel Sharks",
            "Centrophoridae": "Gulper Sharks",

            // FRESHWATER RAYS?
            "Urotrygonidae": "Round Rays",
            "Urolophidae": "Stingarees",
            "Gymnuridae": "Butterfly Rays",
            "Mobulidae": "Mobula Rays",
            "Myliobatidae": "Eagle Rays",
            "Aetobatidae": "Eagle Rays",
            "Dasyatidae": "Stingrays",
            "Rhinopteridae": "Cownose Rays",
            "Torpedinidae": "Torpedo Rays",

            "Chimaeridae": "Shortnosed Chimaeras",
            "Callorhinchidae": "Plough-Nosed Chimaeras",
            "Rhinochimaeridae": "Longnosed Chimaeras",

            // ----------------------------------//

            "Squalus": "Spurdogs",
            "Chiloscyllium": "Bamboo Sharks",
            "Cephaloscyllium": "Swellsharks",
            "Rhizoprionodon": "Sharpnose Sharks",
            "Mustelus": "Smooth-Hounds",
            "Scoliodon": "Spadenose Sharks",
            "Negaprion": "Lemon Sharks",
            "Echinorhinus": "Bramble Sharks",
            "Brachaelurus": "Blind Sharks",
            "Hemiscyllium": "Epaulette Sharks",

            "Neotrygon": "Maskrays",
            "Himantura": "Whiprays",
            "Dasyatis": "Stingrays"

            // ----------------------------------//
        };
        if (taxonomicGroup in commonNames) return ` (${commonNames[taxonomicGroup]})`;
        else return '';
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
        const descriptionParts: string[] = [];
        const addPart = (part: string) => {
            if (part.trim()) descriptionParts.push(part.trim());
        };

        // Start with taxonomic context and physical characteristics
        const taxonomicIntro = this.getTaxonomicIntroduction();
        if (taxonomicIntro) addPart(taxonomicIntro);

        // Physical characteristics and morphology
        const physicalTraits = this.getPhysicalCharacteristics();
        if (physicalTraits) addPart(physicalTraits);

        // Habitat and distribution
        const habitatInfo = this.getHabitatInformation();
        if (habitatInfo) addPart(habitatInfo);

        // Feeding behavior and ecology
        const feedingInfo = this.getFeedingBehavior();
        if (feedingInfo) addPart(feedingInfo);

        // Reproductive strategy
        const reproductiveInfo = this.getReproductiveInformation();
        if (reproductiveInfo) addPart(reproductiveInfo);

        // Behavioral characteristics
        const behavioralInfo = this.getBehavioralCharacteristics();
        if (behavioralInfo) addPart(behavioralInfo);

        // Conservation status
        const conservationInfo = this.getConservationInformation();
        if (conservationInfo) addPart(conservationInfo);

        // Fallback if no specific information is available
        if (descriptionParts.length === 0) {
            const speciesTypeDesc = this.speciesType === SPECIES_TYPE.RAYS ? "ray" : 
                                  this.speciesType === SPECIES_TYPE.CHIMAERAS ? "chimaera" : "shark";
            addPart(`The ${this.commonName} (${this.binomialName}) is a member of the ${this.family} family within the order ${this.order}, representing an important component of marine ecosystems.`);
        }

        return descriptionParts.join(" ");
    }

    private getTaxonomicIntroduction(): string {
        const familyDescriptions: { [key: string]: string } = {
            "Carcharhinidae": "requiem shark",
            "Lamnidae": "mackerel shark",
            "Sphyrnidae": "hammerhead shark",
            "Squalidae": "dogfish shark",
            "Hexanchidae": "cow shark",
            "Chlamydoselachidae": "frilled shark",
            "Heterodontidae": "bullhead shark",
            "Orectolobidae": "carpet shark",
            "Ginglymostomatidae": "nurse shark",
            "Rhincodontidae": "whale shark"
        };

        // Get the appropriate species type description
        let speciesTypeDesc = "shark";
        if (this.speciesType === SPECIES_TYPE.RAYS) {
            speciesTypeDesc = "ray";
        } else if (this.speciesType === SPECIES_TYPE.CHIMAERAS) {
            speciesTypeDesc = "chimaera";
        }

        const familyDesc = familyDescriptions[this.family] || speciesTypeDesc;
        return `The ${this.commonName} (${this.binomialName}) is a species of ${familyDesc} belonging to the ${this.order} order.`;
    }

    private getPhysicalCharacteristics(): string {
        const traits: string[] = [];

        // Body shape and structure
        if (this.tags.includes(FLATTENED_BODY.YES)) {
            traits.push("possesses a dorsoventrally flattened body adapted for benthic life");
        }

        // Gill characteristics
        const gillCount = this.tags.find(tag => Object.values(NUM_GILLS).includes(tag as NUM_GILLS));
        if (gillCount === NUM_GILLS.SIX) {
            traits.push("features six gill slits, a primitive characteristic shared with ancient shark lineages");
        } else if (gillCount === NUM_GILLS.SEVEN) {
            traits.push("possesses seven gill slits, an extremely rare trait among modern sharks");
        }

        // Dorsal fin characteristics
        const dorsalFinCount = this.tags.find(tag => Object.values(NUM_DORSAL_FINS).includes(tag as NUM_DORSAL_FINS));
        if (dorsalFinCount === NUM_DORSAL_FINS.ONE) {
            traits.push("has a single dorsal fin, distinguishing it from most shark species");
        }

        // Dorsal fin spines
        const dorsalSpines = this.tags.find(tag => Object.values(DORSAL_FIN_SPINES).includes(tag as DORSAL_FIN_SPINES));
        if (dorsalSpines === DORSAL_FIN_SPINES.YES) {
            traits.push("bears spines on both dorsal fins for defense");
        } else if (dorsalSpines === DORSAL_FIN_SPINES.ONLY_ON_FIRST) {
            traits.push("features a spine on the first dorsal fin");
        }

        // Caudal fin shape
        const caudalShape = this.tags.find(tag => Object.values(CAUDAL_FIN_SHAPE).includes(tag as CAUDAL_FIN_SHAPE));
        if (caudalShape === CAUDAL_FIN_SHAPE.HOMOCERCAL) {
            traits.push("has a homocercal caudal fin, providing efficient propulsion");
        }

        // Specialized features
        if (this.tags.includes(BIOLUMINESCENT.YES)) {
            traits.push("exhibits bioluminescence, producing light through specialized photophores");
        }

        if (this.tags.includes(NICTITATING_MEMBRANE.YES)) {
            traits.push("possesses a nictitating membrane, a protective third eyelid");
        }

        if (this.tags.includes(SPIRACLES.NO)) {
            traits.push("lacks spiracles, relying entirely on gill ventilation");
        }

        if (this.tags.includes(ANAL_FIN.NO)) {
            traits.push("lacks an anal fin, a characteristic of certain shark orders");
        }

        if (this.tags.includes(MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES)) {
            traits.push("has a terminal mouth position, with the mouth extending in front of the eyes");
        }

        if (this.tags.includes(PROXIMAL_DORSAL_FINS.YES)) {
            traits.push("features proximal dorsal fins positioned close together");
        }

        if (traits.length > 0) {
            return `Morphologically, this species ${traits.join(", ")}.`;
        }
        return "";
    }

    private getHabitatInformation(): string {
        const habitatInfo: string[] = [];

        // Depth range
        if (this.depthRange) {
            const [minDepth, maxDepth] = this.depthRange.split('-').map(d => parseInt(d.trim()));
            if (maxDepth > 1000) {
                habitatInfo.push("inhabits deep oceanic waters");
            } else if (maxDepth > 200) {
                habitatInfo.push("occupies mid-water and continental slope habitats");
            } else {
                habitatInfo.push("frequents coastal and shallow waters");
            }
        }

        // Habitat preferences
        const habitatTags = this.tags.filter(tag => Object.values(HABITAT).includes(tag as HABITAT));
        if (habitatTags.length > 0) {
            const habitatNames = habitatTags.map(tag => tag.toLowerCase().replace(/_/g, ' '));
            habitatInfo.push(`preferring ${habitatNames.join(", ")} environments`);
        }

        // Ocean zones
        const oceanZoneTags = this.tags.filter(tag => Object.values(OCEAN_ZONE).includes(tag as OCEAN_ZONE));
        if (oceanZoneTags.length > 0) {
            const zoneNames = oceanZoneTags.map(tag => tag.toLowerCase().replace(/_/g, ' '));
            habitatInfo.push(`primarily found in the ${zoneNames.join(" and ")} zones`);
        }

        // Water column position
        const waterColumnTags = this.tags.filter(tag => Object.values(WATER_COLUMN).includes(tag as WATER_COLUMN));
        if (waterColumnTags.length > 0) {
            const columnNames = waterColumnTags.map(tag => tag.toLowerCase().replace(/_/g, ' '));
            habitatInfo.push(`typically occupying the ${columnNames.join(" and ")}`);
        }

        if (habitatInfo.length > 0) {
            return `This species ${habitatInfo.join(", ")}.`;
        }
        return "";
    }

    private getFeedingBehavior(): string {
        const feedingTag = this.tags.find(tag => Object.values(FEEDING_BEHAVIOR).includes(tag as FEEDING_BEHAVIOR));
        if (!feedingTag) return "";

        const feedingDescriptions: { [key: string]: string } = {
            [FEEDING_BEHAVIOR.CARNIVOROUS]: "carnivorous diet",
            [FEEDING_BEHAVIOR.PISCIVOROUS]: "piscivorous diet, primarily consuming fish",
            [FEEDING_BEHAVIOR.PLANKTIVOROUS]: "planktivorous diet, feeding on plankton and small organisms",
            [FEEDING_BEHAVIOR.MOLLUSCIVOROUS]: "molluscivorous diet, specializing in mollusks and crustaceans",
            [FEEDING_BEHAVIOR.OMNIVOROUS]: "omnivorous diet"
        };

        return `It maintains a ${feedingDescriptions[feedingTag as FEEDING_BEHAVIOR]}, playing a crucial role in marine food webs.`;
    }

    private getReproductiveInformation(): string {
        const reproTag = this.tags.find(tag => Object.values(REPRODUCTIVE_STRATEGY).includes(tag as REPRODUCTIVE_STRATEGY));
        if (!reproTag) return "";

        const reproductiveDescriptions: { [key: string]: string } = {
            [REPRODUCTIVE_STRATEGY.OVIPAROUS]: "exhibits oviparous reproduction, laying leathery egg cases that develop externally",
            [REPRODUCTIVE_STRATEGY.VIVIPAROUS]: "demonstrates viviparous reproduction, giving birth to live young through placental connections",
            [REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS]: "employs ovoviviparous reproduction, with eggs hatching internally before live birth",
            [REPRODUCTIVE_STRATEGY.EMBRYTROPHY]: "practices embryotrophy, providing additional nutrition to developing embryos",
            [REPRODUCTIVE_STRATEGY.OOPHAGY]: "exhibits oophagy, where embryos consume unfertilized eggs for nutrition",
            [REPRODUCTIVE_STRATEGY.EMBRYOPHAGY]: "demonstrates embryophagy, with embryos engaging in intrauterine cannibalism",
            [REPRODUCTIVE_STRATEGY.PARTHENOGENESIS]: "is capable of parthenogenesis, reproducing asexually when mates are unavailable",
            [REPRODUCTIVE_STRATEGY.UNKNOWN]: "has reproductive strategies that remain poorly understood"
        };

        return `Reproductively, this species ${reproductiveDescriptions[reproTag as REPRODUCTIVE_STRATEGY]}.`;
    }

    private getBehavioralCharacteristics(): string {
        const behaviors: string[] = [];

        // Group behavior
        const groupBehaviorTag = this.tags.find(tag => Object.values(GROUP_BEHAVIOR).includes(tag as GROUP_BEHAVIOR));
        if (groupBehaviorTag === GROUP_BEHAVIOR.SCHOOLING) {
            behaviors.push("forms schools for enhanced foraging efficiency and predator avoidance");
        } else if (groupBehaviorTag === GROUP_BEHAVIOR.SOLITARY) {
            behaviors.push("exhibits solitary behavior, typically hunting and traveling alone");
        }

        // Specific behaviors
        const behaviorTag = this.tags.find(tag => Object.values(BEHAVIOR).includes(tag as BEHAVIOR));
        if (behaviorTag === BEHAVIOR.MIGRATING) {
            behaviors.push("undertakes extensive migrations across ocean basins");
        } else if (behaviorTag === BEHAVIOR.BREACHING) {
            behaviors.push("is known for spectacular breaching behavior, leaping from the water");
        }

        if (behaviors.length > 0) {
            return `Behaviorally, this species ${behaviors.join(" and ")}.`;
        }
        return "";
    }

    private getConservationInformation(): string {
        const conservationTag = this.tags.find(tag => Object.values(CONSERVATION_STATUS).includes(tag as CONSERVATION_STATUS));
        if (!conservationTag) return "";

        const conservationDescriptions: { [key: string]: string } = {
            [CONSERVATION_STATUS.CR]: "is critically endangered, facing an extremely high risk of extinction in the wild",
            [CONSERVATION_STATUS.EN]: "is classified as endangered, requiring immediate conservation intervention",
            [CONSERVATION_STATUS.VU]: "is listed as vulnerable, with populations declining due to various threats",
            [CONSERVATION_STATUS.NT]: "is near threatened, approaching vulnerable status and requiring monitoring",
            [CONSERVATION_STATUS.LC]: "is of least concern, with stable populations and no immediate threats",
            [CONSERVATION_STATUS.DD]: "has data deficient status, with insufficient information for proper assessment",
            [CONSERVATION_STATUS.EW]: "is extinct in the wild, surviving only in captivity",
            [CONSERVATION_STATUS.EX]: "is extinct, with no known surviving individuals"
        };

        return `Conservation-wise, this species ${conservationDescriptions[conservationTag as CONSERVATION_STATUS]}.`;
    }
}
