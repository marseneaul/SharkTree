import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import himanturaAstraImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/himantura-astra.png";

export const himanturaAstra = {
    commonName: "Black-Spotted Whipray",
    binomialName: "Himantura astra",

    imageUrl: himanturaAstraImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Himantura",
    species: "astra",

    tags: [
        CONSERVATION_STATUS.NT,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-140 m",
};