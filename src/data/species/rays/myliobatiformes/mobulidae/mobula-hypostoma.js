import { BEHAVIOR, FEEDING_BEHAVIOR, GROUP_BEHAVIOR, TEMPERATURE_REGULATION } from "../../../../../constants/enums";

export const mobulaHypostoma = {
    commonName: "Lesser Devil Ray",
    binomialName: "Mobula hypostoma",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Mobulidae",
    genus: "Mobula",
    species: "hypostoma",

    tags: [
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        FEEDING_BEHAVIOR.PLANKTIVOROUS,
        FEEDING_BEHAVIOR.OMNIVOROUS,
        FEEDING_BEHAVIOR.CARNIVOROUS,
        GROUP_BEHAVIOR.SCHOOLING,
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
    ],
};