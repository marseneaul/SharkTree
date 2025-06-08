import { BEHAVIOR, CONSERVATION_STATUS, FEEDING_BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, TAIL_SPINES, TEMPERATURE_REGULATION } from "../../../../../constants/enums";

export const mobulaThurstoni = {
    commonName: "Bentfin Devil Ray",
    alternativeNames: ["Lesser Devil Ray", "Smoothtail Devil Ray", "Smoothtail Mobula", "Thurston's Devil Ray"],
    binomialName: "Mobula thurstoni",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Mobulidae",
    genus: "Mobula",
    species: "thurstoni",

    tags: [
        CONSERVATION_STATUS.EN,
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        FEEDING_BEHAVIOR.PLANKTIVOROUS,
        GROUP_BEHAVIOR.SCHOOLING,
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.NO,
    ],
    depthRange: "0-100 m",
};