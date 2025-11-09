import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaSmirnoviImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-smirnovi.webp";

export const bathyrajaSmirnovi = {
    commonName: "Golden Skate",
    binomialName: "Bathyraja smirnovi",

    imageUrl: bathyrajaSmirnoviImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "smirnovi",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "58-1125 m",
};