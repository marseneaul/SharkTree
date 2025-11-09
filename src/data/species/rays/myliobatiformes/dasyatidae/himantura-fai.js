import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import himanturaFaiImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/himantura-fai.webp";
import photographyImg from "./../../../../../images/photography/himantura-fai.webp";

export const himanturaFai = {
    commonName: "Pink Whipray",
    binomialName: "Himantura fai",

    imageUrls: [himanturaFaiImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Himantura",
    species: "fai",

    tags: [
        CONSERVATION_STATUS.VU,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-70 m",
};