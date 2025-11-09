import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import riorajaAgassiziiImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/rioraja-agassizii.webp";

export const riorajaAgassizii = {
    commonName: "Rio Skate",
    binomialName: "Rioraja agassizii",

    imageUrl: riorajaAgassiziiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Rioraja",
    species: "agassizii",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "5-600 m",
};