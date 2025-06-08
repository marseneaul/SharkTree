import { BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

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
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        BEHAVIOR.BREACHING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};