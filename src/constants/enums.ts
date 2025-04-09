export enum TAXONOMIC_LEVELS {
    GENUS = "genus",
    FAMILY = "family",
    ORDER = "order",
    SUPERORDER = "superorder",
    SUBDIVISION = "subdivision"
}

export enum CONSERVATION_STATUS {
    EX = "Extinct (EX)",
    EW = "Extinct in the Wild (EW)",
    CR = "Critically Endangered (CR)",
    EN = "Endangered (EN)",
    VU = "Vulnerable (VU)",
    NT = "Near Threatened (NT)",
    CD = "Conservation Dependent (CD)",
    LC = "Least Concern (LC)",
    DD = "Data Deficient (DD)",
    NE = "Not Evaluated (NE)"
}

export enum REPRODUCTIVE_STRATEGY {
    OVIPAROUS = "Oviparous",
    VIVIPAROUS = "Viviparous",
    OVOVIVIPAROUS = "Ovoviviparous",
    EMBRYTROPHY = "Embrytrophy",
    PARTHENOGENESIS = "Parthenogenesis",
    OOPHAGY = "Oophagy",
    EMBRYOPHAGY = "Embryophagy",
    UNKNOWN = "Unknown"
}

export enum REEF_ZONE {
    TWA = "Tropical Western Atlantic (TWA)",
    PAC = "California, Pacific Northwest, and Alaska (PAC)",
    HAW = "Hawaii (HAW)",
    TEP = "Tropical Eastern Pacific (TEP)",
    SOP = "South Pacific (SOP)",
    NE = "Northeast US and Eastern Canada (NE)",
    SAS = "South Atlantic States (SAS)",
    CIP = "Central Indo-Pacific (CIP)",
    EAM = "Eastern Atlantic and Mediterranean (EAM)",
    IORS = "Indian Ocean and Red Sea (IORS)"
}

// https://en.m.wikipedia.org/wiki/List_of_feeding_behaviours
export enum FEEDING_BEHAVIOR {
    CARNIVOROUS = "Carnivorous",
    OMNIVOROUS = "Omnivorous",
    PLANKTIVOROUS = "Planktivorous",
    PISCIVOROUS = "Piscivorous",
    MOLLUSCIVOROUS = "Molluscivorous",
}

export enum OCEAN_ZONE {
    EPIPELAGIC = "Epipelagic",
    MESOPELAGIC = "Mesopelagic",
    BATHYPELAGIC = "Bathypelagic",
    ABYSSALPELAGIC = "Abyssalpelagic",
    HADALPELAGIC = "Hadalpelagic"
}

export enum TEMPERATURE_REGULATION {
    ENDOTHERMIC = "Endothermic",
    REGIONALLY_ENDOTHERMIC = "Regionally Endothermic",
    ECTOTHERMIC = "Ectothermic"
}

export enum GEOGRAPHICAL_DISTRIBUTION {
    ENDEMIC = "Endemic",
    COSMOPOLITAN = "Cosmopolitan",
    TROPICAL = "Tropical",
    TEMPERATE = "Temperate",
    POLAR = "Polar"
}

// https://en.wikipedia.org/wiki/Pelagic_zone
// https://en.wikipedia.org/wiki/Oceanic_zone - picture explains this
export enum HABITAT {
    RIVERS = "Rivers",
    LAKES = "Lakes",
    ESTUARIES = "Estuaries",
    PELAGIC_ZONE = "Pelagic Zone",
    NERITIC_ZONE = "Neritic Zone",
    OCEANIC_ZONE = "Oceanic Zone",
    DEMERSAL_ZONE = "Demersal Zone",
    BENTHIC_ZONE = "Benthic Zone",
    MANGROVE_FORESTS = "Mangrove Forests",
    KELP_FORESTS = "Kelp Forests",
    INTERTIDAL_ZONE = "Intertidal Zone",
    SEAGRASS_BEDS = "Seagrass Beds",
    CORAL_REEFS = "Coral Reefs",
    CONTINENTAL_SHELVES = "Continental Shelves",
    ISLANDS = "Islands",
    LAGOONS = "Lagoons",
    SANDY_PLAINS = "Sandy Plains"
}

export enum WATER_COLUMN {
    SURFACE = "Surface",
    MIDWATER = "Midwater",
    DEEP_WATER = "Deep Water"
}

export enum PHYSICAL_CHARACTERISTIC {
    COUNTERSHADING = "Countershading",
    TORPEDO_SHAPE = "Torpedo Shape",
    WHITE_TIPPED_FIRST_DORSAL_FIN = "White-Tipped First Dorsal Fin",
    WHITE_TIPPED_SECOND_DORSAL_FIN = "White-Tipped Second Dorsal Fin",
    BLACK_TIPPED_FIRST_DORSAL_FIN = "Black-Tipped First Dorsal Fin",
    BLACK_TIPPED_SECOND_DORSAL_FIN = "Black-Tipped Second Dorsal Fin",
}

export enum BEHAVIOR {
    MIGRATING = "Migrating",
    BREACHING = "Breaching",
    NONE = "No Unique Behaviors"
}

export enum GROUP_BEHAVIOR {
    SOLITARY = "Solitary",
    SCHOOLING = "Schooling"
}

export enum NUM_GILLS {
    FIVE = "5 Gills",
    SIX = "6 Gills",
    SEVEN = "7 Gills",
}

export enum NUM_DORSAL_FINS {
    ONE = "1 Dorsal Fin",
    TWO = "2 Dorsal Fins"
}

export enum ANAL_FIN {
    YES = "Yes Anal Fin",
    NO = "No Anal Fin"
}

export enum SPIRACLES {
    YES = "Yes Spiracles",
    NO = "No Spiracles"
}

export enum FLATTENED_BODY {
    YES = "Yes Flattened Body",
    NO = "No Flattened Body"
}

export enum NICTITATING_MEMBRANE {
    YES = "Yes Nictitating Membrane",
    NO = "No Nictitating Membrane"
}

export enum CAUDAL_FIN_SHAPE {
    HETEROCERCAL = "Heterocercal",
    HOMOCERCAL = "Homocercal"
}

export enum MOUTH_IN_FRONT_OF_EYES {
    MOUTH_IN_FRONT_OF_EYES = "Mouth In Front of Eyes",
    MOUTH_NOT_IN_FRONT_OF_EYES = "Mouth Not In Front of Eyes"
}

export enum BIOLUMINESCENT {
    YES = "Is Bioluminescent",
    NO = "Not Bioluminescent"
}

export enum DORSAL_FIN_SPINES {
    YES = "Both Dorsal Fin Spines",
    ONLY_ON_FIRST = "Only First Dorsal Fin Spine",
    NO = "No Dorsal Fin Spines"
}

export function getEnumCategory(tag: any): string | undefined {
    if (Object.values(NUM_DORSAL_FINS).includes(tag)) return "NUM_DORSAL_FINS";
    if (Object.values(NUM_GILLS).includes(tag)) return "NUM_GILLS";
    if (Object.values(ANAL_FIN).includes(tag)) return "ANAL_FIN";
    if (Object.values(NICTITATING_MEMBRANE).includes(tag)) return "NICTITATING_MEMBRANE";
    if (Object.values(CAUDAL_FIN_SHAPE).includes(tag)) return "CAUDAL_FIN_SHAPE";
    if (Object.values(MOUTH_IN_FRONT_OF_EYES).includes(tag)) return "MOUTH_IN_FRONT_OF_EYES";
    if (Object.values(BIOLUMINESCENT).includes(tag)) return "BIOLUMINESCENT";
    if (Object.values(DORSAL_FIN_SPINES).includes(tag)) return "DORSAL_FIN_SPINES";
    if (Object.values(SPIRACLES).includes(tag)) return "SPIRACLES";
    if (Object.values(FLATTENED_BODY).includes(tag)) return "FLATTENED_BODY";

    if (Object.values(CONSERVATION_STATUS).includes(tag)) return "CONSERVATION_STATUS";
    if (Object.values(TEMPERATURE_REGULATION).includes(tag)) return "TEMPERATURE_REGULATION";
    if (Object.values(FEEDING_BEHAVIOR).includes(tag)) return "FEEDING_BEHAVIOR";
    if (Object.values(REPRODUCTIVE_STRATEGY).includes(tag)) return "REPRODUCTIVE_STRATEGY";
    if (Object.values(GROUP_BEHAVIOR).includes(tag)) return "GROUP_BEHAVIOR";

    if (Object.values(REEF_ZONE).includes(tag)) return "REEF_ZONE";
    if (Object.values(OCEAN_ZONE).includes(tag)) return "OCEAN_ZONE";
    if (Object.values(GEOGRAPHICAL_DISTRIBUTION).includes(tag)) return "GEOGRAPHICAL_DISTRIBUTION";
    if (Object.values(HABITAT).includes(tag)) return "HABITAT";
    if (Object.values(WATER_COLUMN).includes(tag)) return "WATER_COLUMN";
    if (Object.values(PHYSICAL_CHARACTERISTIC).includes(tag)) return "PHYSICAL_CHARACTERISTIC";
    if (Object.values(BEHAVIOR).includes(tag)) return "BEHAVIOR";
    return undefined;
}

export const DEFAULT_TAGS = [
    CONSERVATION_STATUS.LC,
    REPRODUCTIVE_STRATEGY.UNKNOWN,
    TEMPERATURE_REGULATION.ECTOTHERMIC, 
    FEEDING_BEHAVIOR.CARNIVOROUS,
    GROUP_BEHAVIOR.SOLITARY,
    BEHAVIOR.NONE,
    
    NUM_DORSAL_FINS.TWO, 
    NUM_GILLS.FIVE, 
    ANAL_FIN.YES,
    SPIRACLES.YES,
    FLATTENED_BODY.NO,
    NICTITATING_MEMBRANE.NO,
    CAUDAL_FIN_SHAPE.HETEROCERCAL,
    MOUTH_IN_FRONT_OF_EYES.MOUTH_NOT_IN_FRONT_OF_EYES,
    BIOLUMINESCENT.NO,
    DORSAL_FIN_SPINES.NO
];