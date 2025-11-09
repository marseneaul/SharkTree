import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaShuntoviImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-shuntovi.webp";

export const bathyrajaShuntovi = {
    commonName: "Longnose Deepsea Skate",
    binomialName: "Bathyraja shuntovi",

    imageUrl: bathyrajaShuntoviImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "shuntovi",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "300-1485 m",
};