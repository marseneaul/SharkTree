import { BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../../constants/enums";

export const aetobatusNarinari = {
    commonName: "Spotted Eagle Ray",
    binomialName: "Aetobatus narinari",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Aetobatidae",
    genus: "Aetobatus",
    species: "narinari",

    tags: [
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        GROUP_BEHAVIOR.SCHOOLING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};