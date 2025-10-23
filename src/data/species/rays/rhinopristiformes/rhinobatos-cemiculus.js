import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import rhinobatosCemiculusImg from "./../../../../images/rays/rhinopristiformes/rhinobatos-cemiculus.png";

export const rhinobatosCemiculus = {
    commonName: "Blackchin Guitarfish",
    binomialName: "Rhinobatos cemiculus",

    imageUrl: rhinobatosCemiculusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Rhinobatidae",
    genus: "Rhinobatos",
    species: "cemiculus",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-80 m",
};