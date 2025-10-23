import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import brochirajaLevivenetaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/brochiraja-leviveneta.png";

export const brochirajaLeviveneta = {
    commonName: "Blue Deepsea Skate",
    binomialName: "Brochiraja leviveneta",

    imageUrl: brochirajaLevivenetaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Brochiraja",
    species: "leviveneta",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "300-1200 m",
};