import { BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../../constants/enums";

export const rhinopteraBonasus = {
    commonName: "Cownose Ray",
    binomialName: "Rhinoptera bonasus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Rhinopteridae",
    genus: "Rhinoptera",
    species: "bonasus",

    tags: [
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        GROUP_BEHAVIOR.SCHOOLING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ]
};