import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rhinorajaMaclovianaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/rhinoraja-macloviana.png";

export const rhinorajaMacloviana = {
    commonName: "Patagonian Skate",
    binomialName: "Rhinoraja macloviana",

    imageUrl: rhinorajaMaclovianaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Rhinoraja",
    species: "macloviana",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "50-515 m",
};