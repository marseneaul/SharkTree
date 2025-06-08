import { NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../constants/enums";

export const plesiobatisDaviesi = {
    commonName: "Deepwater Stingray",
    alternativeNames: ["Giant Stingaree"],
    binomialName: "Plesiobatis daviesi",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Plesiobatidae",
    genus: "Plesiobatis",
    species: "daviesi",

    tags: [
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};