import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import brochirajaAsperulaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/brochiraja-asperula.png";

export const brochirajaAsperula = {
    commonName: "Smooth Deepsea Skate",
    binomialName: "Brochiraja asperula",

    imageUrl: brochirajaAsperulaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Brochiraja",
    species: "asperula",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "57-1150 m",
};