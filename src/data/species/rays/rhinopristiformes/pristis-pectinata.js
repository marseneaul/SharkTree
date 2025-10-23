import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import pristisPectinataImg from "./../../../../images/rays/rhinopristiformes/pristis-pectinata.png";

export const pristisPectinata = {
    commonName: "Smalltooth Sawfish",
    binomialName: "Pristis pectinata",

    imageUrl: pristisPectinataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Pristidae",
    genus: "Pristis",
    species: "pectinata",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-122 m",
};