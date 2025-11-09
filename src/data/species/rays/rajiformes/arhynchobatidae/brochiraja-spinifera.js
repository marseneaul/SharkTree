import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import brochirajaSpiniferaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/brochiraja-spinifera.webp";

export const brochirajaSpinifera = {
    commonName: "Spiny Deepsea Skate",
    binomialName: "Brochiraja spinifera",

    imageUrl: brochirajaSpiniferaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Brochiraja",
    species: "spinifera",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "125-1500 m",
};