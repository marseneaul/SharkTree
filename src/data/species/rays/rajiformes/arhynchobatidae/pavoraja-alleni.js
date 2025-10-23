import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import pavorajaAlleniImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/pavoraja-alleni.png";

export const pavorajaAlleni = {
    commonName: "Allen's Skate",
    binomialName: "Pavoraja alleni",

    imageUrl: pavorajaAlleniImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Pavoraja",
    species: "alleni",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "305-460 m",
};