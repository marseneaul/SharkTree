import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rhinorajaMultispinisImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/rhinoraja-multispinis.webp";

export const rhinorajaMultispinis = {
    commonName: "Multispine Skate",
    binomialName: "Rhinoraja multispinis",

    imageUrl: rhinorajaMultispinisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Rhinoraja",
    species: "multispinis",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "70-740 m",
};