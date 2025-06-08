import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const gymnuraMicrura = {
    commonName: "Smooth Butterfly Ray",
    binomialName: "Gymnura micrura",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Gymnuridae",
    genus: "Gymnura",
    species: "micrura",

    tags: [
        CONSERVATION_STATUS.NT,
        TAIL_SPINES.NO,
        VENOMOUS_SPINE.NO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NUM_DORSAL_FINS.ZERO,
    ],
    depthRange: "0-40 m",
};