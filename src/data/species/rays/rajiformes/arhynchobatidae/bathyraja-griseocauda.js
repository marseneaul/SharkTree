import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaGriseocaudaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-griseocauda.png";

export const bathyrajaGriseocauda = {
    commonName: "Graytail Skate",
    alternativeNames: ["Grey Tail Skate"],
    binomialName: "Bathyraja griseocauda",

    imageUrl: bathyrajaGriseocaudaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "griseocauda",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "30-1010 m",
};