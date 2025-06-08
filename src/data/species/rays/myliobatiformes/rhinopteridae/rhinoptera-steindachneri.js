import { BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const rhinopteraSteindachneri = {
    commonName: "Giant Cownose Ray",
    alternativeNames: ["Pacific Cownose Ray", "Golden Cownose Ray"],
    binomialName: "Rhinoptera steindachneri",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Rhinopteridae",
    genus: "Rhinoptera",
    species: "steindachneri",

    tags: [
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        BEHAVIOR.MIGRATING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};