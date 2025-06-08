import { BIOLUMINESCENT, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../../constants/enums";

export const taeniuraLymma = {
    commonName: "Bluespotted Ribbontail Ray",
    binomialName: "Taeniura lymma",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Taeniura",
    species: "lymma",

    tags: [
        NUM_DORSAL_FINS.ZERO,
        BIOLUMINESCENT.YES,
        TAIL_SPINES.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};