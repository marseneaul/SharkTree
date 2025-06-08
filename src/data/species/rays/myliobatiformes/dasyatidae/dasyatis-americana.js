import { BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";

export const dasyatisAmericana = {
    commonName: "Southern Stingray",
    binomialName: "Dasyatis americana",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Dasyatis",
    species: "americana",

    tags: [
        NUM_DORSAL_FINS.ZERO,
        BEHAVIOR.BREACHING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};