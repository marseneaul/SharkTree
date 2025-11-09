import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaTaranetziImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/rhinoraja-taranetzi.webp";

export const bathyrajaTaranetzi = {
    commonName: "Mud Skate",
    binomialName: "Bathyraja taranetzi",

    imageUrl: bathyrajaTaranetziImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "taranetzi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "17-1063 m",
};