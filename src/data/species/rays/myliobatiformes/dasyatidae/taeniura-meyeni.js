import { NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINE, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const taeniuraMeyeni = {
    commonName: "Round Ribbontail Ray",
    alternativeNames: ["Blotched Fantail Ray"],
    binomialName: "Taeniura meyeni",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Taeniura",
    species: "meyeni",

    tags: [
        NUM_DORSAL_FINS.ZERO,
        VENOMOUS_SPINE.YES,
        TAIL_SPINES.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};