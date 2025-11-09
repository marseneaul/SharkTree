import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import urolophusBucculentusImg from "./../../../../../images/rays/myliobatiformes/urolophus/urolophus-bucculentus.webp";

export const urolophusBucculentus = {
    commonName: "Sandyback Stingaree",
    alternativeNames: ["Great Stingaree"],
    binomialName: "Urolophus bucculentus",

    imageUrl: urolophusBucculentusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urolophidae",
    genus: "Urolophus",
    species: "bucculentus",

    tags: [
        CONSERVATION_STATUS.VU,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "65-265 m",
};