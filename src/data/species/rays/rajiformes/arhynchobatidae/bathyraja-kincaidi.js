import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaKincaidiImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-kincaidi.webp";

export const bathyrajaKincaidi = {
    commonName: "Sandpaper Skate",
    binomialName: "Bathyraja kincaidi",

    imageUrl: bathyrajaKincaidiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "kincaidi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "18-1372 m",
};