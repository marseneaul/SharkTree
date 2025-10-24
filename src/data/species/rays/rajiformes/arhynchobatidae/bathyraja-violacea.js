import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaViolaceaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-violacea.png";

export const bathyrajaViolacea = {
    commonName: "Okhotsk Skate",
    binomialName: "Bathyraja violacea",

    imageUrl: bathyrajaViolaceaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "violacea",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "25-1100 m",
};