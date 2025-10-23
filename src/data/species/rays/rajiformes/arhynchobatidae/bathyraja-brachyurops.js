import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaBrachyuropsImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-brachyurops.png";

export const bathyrajaBrachyurops = {
    commonName: "Broadnose Skate",
    binomialName: "Bathyraja brachyurops",

    imageUrl: bathyrajaBrachyuropsImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "brachyurops",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "28-604 m",
};