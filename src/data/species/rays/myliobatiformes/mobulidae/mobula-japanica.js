import { BEHAVIOR, FEEDING_BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, TEMPERATURE_REGULATION } from "../../../../../constants/enums";

export const mobulaJapanica = {
    commonName: "Spinetail Mobula",
    alternativeNames: ["Spinetail Devil Ray", "Japanese Mobula Ray"],
    binomialName: "Mobula japanica",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Mobulidae",
    genus: "Mobula",
    species: "japanica",

    tags: [
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        FEEDING_BEHAVIOR.PLANKTIVOROUS,
        GROUP_BEHAVIOR.SCHOOLING,
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
        NUM_DORSAL_FINS.ONE,
    ],
};