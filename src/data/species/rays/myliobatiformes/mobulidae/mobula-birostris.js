import { BEHAVIOR, FEEDING_BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, TEMPERATURE_REGULATION } from "../../../../../constants/enums";

export const mobulaBirostris = {
    commonName: "Giant Oceanic Manta Ray",
    alternativeNames: ["Giant Manta Ray", "Oceanic Manta Ray"],
    binomialName: "Mobula birostris",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Mobulidae",
    genus: "Mobula",
    species: "birostris",

    tags: [
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        FEEDING_BEHAVIOR.PLANKTIVOROUS,
        FEEDING_BEHAVIOR.OMNIVOROUS,
        FEEDING_BEHAVIOR.CARNIVOROUS,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        GROUP_BEHAVIOR.SCHOOLING,
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.NO,
    ],
};