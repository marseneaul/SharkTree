import { NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../../constants/enums";

export const pteromylaeusBovinus = {
    commonName: "Bull Ray",
    alternativeNames: ["Duckbill Ray", "Duckbill Eagle Ray"],
    binomialName: "Aetomylaeus bovinus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Myliobatidae",
    genus: "Aetomylaeus",
    species: "bovinus",

    tags: [
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};