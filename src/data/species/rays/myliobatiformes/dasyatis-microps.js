import { BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../constants/enums";

export const dasyatisMicrops = {
    commonName: "Smalleye Stingray",
    binomialName: "Megatrygon microps",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Megatrygon",
    species: "microps",

    tags: [
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        BEHAVIOR.MIGRATING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};