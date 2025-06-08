import { BEHAVIOR, CONSERVATION_STATUS, FEEDING_BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, TAIL_SPINES, TEMPERATURE_REGULATION } from "../../../../../constants/enums";

export const mobulaMunkiana = {
    commonName: "Manta de Monk",
    alternativeNames: ["Munk's Devil Ray", "Pygmy Devil Ray", "Smoothtail Mobula", "Munk's Pygmy Devil Ray"],
    binomialName: "Mobula munkiana",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Mobulidae",
    genus: "Mobula",
    species: "munkiana",

    tags: [
        CONSERVATION_STATUS.VU,
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        FEEDING_BEHAVIOR.PLANKTIVOROUS,
        GROUP_BEHAVIOR.SCHOOLING,
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.NO,
    ],
    depthRange: "0-30 m",
};