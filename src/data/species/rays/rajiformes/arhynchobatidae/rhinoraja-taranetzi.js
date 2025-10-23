import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rhinorajaTaranetziImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/rhinoraja-taranetzi.png";

export const rhinorajaTaranetzi = {
    commonName: "Mud Skate",
    binomialName: "Rhinoraja taranetzi",

    imageUrl: rhinorajaTaranetziImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Rhinoraja",
    species: "taranetzi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "17-1063 m",
};