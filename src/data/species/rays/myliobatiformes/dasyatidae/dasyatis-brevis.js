import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import dasyatisBrevisImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/dasyatis-brevis.webp";

export const dasyatisBrevis = {
    commonName: "Diamond Stingray",
    binomialName: "Dasyatis brevis",

    imageUrl: dasyatisBrevisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Dasyatis",
    species: "brevis",

    tags: [
        CONSERVATION_STATUS.VU,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-150 m",
};