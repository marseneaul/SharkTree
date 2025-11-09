import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaScaphiopsImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-scaphiops.webp";

export const bathyrajaScaphiops = {
    commonName: "Cuphead Skate",
    binomialName: "Bathyraja scaphiops",

    imageUrl: bathyrajaScaphiopsImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "scaphiops",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "30-925 m",
};