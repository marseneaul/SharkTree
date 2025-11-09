import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaMinispinosaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-minispinosa.webp";

export const bathyrajaMinispinosa = {
    commonName: "Smallthorn Skate",
    binomialName: "Bathyraja minispinosa",

    imageUrl: bathyrajaMinispinosaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "minispinosa",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "106-1420 m",
};