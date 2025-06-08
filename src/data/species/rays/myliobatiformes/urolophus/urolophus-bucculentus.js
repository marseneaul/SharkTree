import { NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../../constants/enums";

export const urolophusBucculentus = {
    commonName: "Sandyback Stingaree",
    alternativeNames: ["Great Stingaree"],
    binomialName: "Urolophus bucculentus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urolophidae",
    genus: "Urolophus",
    species: "bucculentus",

    tags: [
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};