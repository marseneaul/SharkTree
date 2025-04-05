export enum CONSERVATION_STATUS {
    EX = "Extinct (EX)",
    EW = "Extinct in the Wild (EW)",
    CR = "Critically Endangered (CR)",
    EN = "Endangered (EN)",
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
    PLACENTAL_VIVIPAROUS = "Placental Viviparous",
    PARTHENOGENIC = "Parthenogenic",
    OOPHAGY = "Oophagy"
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
    PISCIVOROUS = "Piscivore",
    MOLLUSCIVOROUS = "Molluscivorous",
}

export enum OCEAN_ZONE {
    EPIPELAGIC = "Epipelagic",
    MESOPELAGIC = "Mesopelagic",
    BATHYPELAGIC = "Bathypelagic",
    ABYSSALPELAGIC = "Abyssalpelagic",
    HADALPELAGIC = "Hadalpelagic"
} 

export enum EVOLUTIONARY_CHARACTERISTIC {
    PRIMITIVE = "Primitive",
    DERIVED = "Derived"
}

export enum UNIQUE_FEATURE {
    SPINY = "Spiny",
    ELECTRIC = "Electric",
    FILTER_FEEDER = "Filter-Feeder",
    APEX_PREDATOR = "Apex Predator"
}

export enum TEMPERATURE_REGULATION {
    ENDOTHERMIC = "Endothermic",
    EXOTHERMIC = "Exothermic"
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
    HETEROCERCAL_TAIL = "Heterocercal Tail",
    HOMOCERCAL_TAIL = "Homocercal Tail",
    TORPEDO_SHAPE = "Torpedo Shape",
    WHITE_TIPPED_FIRST_DORSAL_FIN = "White-Tipped First Dorsal Fin",
    WHITE_TIPPED_SECOND_DORSAL_FIN = "White-Tipped Second Dorsal Fin",
    BLACK_TIPPED_FIRST_DORSAL_FIN = "Black-Tipped First Dorsal Fin",
    BLACK_TIPPED_SECOND_DORSAL_FIN = "Black-Tipped Second Dorsal Fin",
    MOUTH_EXTENDING_BEHIND_THE_EYES = "Mouth Extending Behind the Eyes",
    MOUTH_NOT_EXTENDING_BEHIND_THE_EYES = "Mouth Not Extending Behind the Eyes",
    EYES_WITH_NICTITATING_MEMBRANES = "Eyes With Nictitating Membranes",
    EYES_WITHOUT_NICTITATING_MEMBRANES = "Eyes Without Nictitating Membranes",
    BIOLUMINESCENT = "Bioluminescent",
    LARGED_SIZED = "Large-sized",
    SMALL_SIZED = "Small-sized",
    FLATTENED = "Flattened",
    STREAMLINED = "Streamlined",
    FIVE_GILLS = "Five Gills",
    SIX_GILLS = "Six Gills",
    SEVEN_GILLS = "Seven Gills",
    ONE_DORSAL_FIN = "One Dorsal Fin",
    TWO_DORSAL_FINS = "Two Dorsal Fins"
}

export enum BEHAVIOR {
    NOCTURNAL = "Nocturnal",
    DIURNAL = "Diurnal",
    SOLITARY = "Solitary",
    SCHOOLING = "Schooling",
    MIGRATION = "Migration",
    HUNTING_IN_PACKS = "Hunting in Packs",
    BREACHING = "Breaching"
}

export enum NUM_GILLS {
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
}

export enum NUM_DORSAL_FINS {
    ONE = "1",
    TWO = "2"
}