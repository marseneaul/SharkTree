import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import insentirajaSubtilispinosaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/insentiraja-subtilispinosa.webp";

export const insentirajaSubtilispinosa = {
    commonName: "Western Looseskin Skate",
    alternativeNames: ["Velvet Skate"],
    binomialName: "Insentiraja subtilispinosa",

    imageUrl: insentirajaSubtilispinosaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Insentiraja",
    species: "subtilispinosa",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "320-1460 m",
};