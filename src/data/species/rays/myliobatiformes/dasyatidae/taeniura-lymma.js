import { BIOLUMINESCENT, CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import taeniuraLymmaImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/taeniura-lymma.png";

export const taeniuraLymma = {
    commonName: "Bluespotted Ribbontail Ray",
    binomialName: "Taeniura lymma",

    imageUrl: taeniuraLymmaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Taeniura",
    species: "lymma",

    tags: [
        CONSERVATION_STATUS.LC,
        NUM_DORSAL_FINS.ZERO,
        VENOMOUS_SPINE.YES,
        BIOLUMINESCENT.YES,
        TAIL_SPINES.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-50 m",
};