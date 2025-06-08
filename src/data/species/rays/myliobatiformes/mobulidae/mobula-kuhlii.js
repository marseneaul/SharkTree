import { BEHAVIOR, CONSERVATION_STATUS, FEEDING_BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, TAIL_SPINES, TEMPERATURE_REGULATION } from "../../../../../constants/enums";

export const mobulaKuhlii = {
    commonName: "Shortfin Devil Ray",
    binomialName: "Mobula kuhlii",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Mobulidae",
    genus: "Mobula",
    species: "kuhlii",

    tags: [
        CONSERVATION_STATUS.EN,
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        FEEDING_BEHAVIOR.PLANKTIVOROUS,
        FEEDING_BEHAVIOR.OMNIVOROUS,
        FEEDING_BEHAVIOR.CARNIVOROUS,
        GROUP_BEHAVIOR.SCHOOLING,
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.NO,
    ],
    depthRange: "50 m",
};