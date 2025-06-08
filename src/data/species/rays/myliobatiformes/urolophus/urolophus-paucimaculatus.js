import { NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../../constants/enums";

export const urolophusPaucimaculatus = {
    commonName: "Sparsely Spotted Stingaree",
    alternativeNames: ["White-Spotted Stingaree", "Dixon's Stingaree"],
    binomialName: "Urolophus paucimaculatus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urolophidae",
    genus: "Urolophus",
    species: "paucimaculatus",

    tags: [
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};