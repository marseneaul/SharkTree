import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import pavorajaNitidaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/pavoraja-nitida.png";

export const pavorajaNitida = {
    commonName: "Peacock Skate",
    binomialName: "Pavoraja nitida",

    imageUrl: pavorajaNitidaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Pavoraja",
    species: "nitida",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "75-450 m",
};