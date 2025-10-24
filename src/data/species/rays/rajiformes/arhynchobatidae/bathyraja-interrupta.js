import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaInterruptaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-interrupta.png";

export const bathyrajaInterrupta = {
    commonName: "Bering Skate",
    binomialName: "Bathyraja interrupta",

    imageUrl: bathyrajaInterruptaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "interrupta",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "23-1380 m",
};