import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaMaculataImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-maculata.png";

export const bathyrajaMaculata = {
    commonName: "White-Blotched Skate",
    binomialName: "Bathyraja maculata",

    imageUrl: bathyrajaMaculataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "maculata",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "73-1200 m",
};