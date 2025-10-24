import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import atlantorajaCastelnauiImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/atlantoraja-castelnaui.png";

export const atlantorajaCastelnaui = {
    commonName: "Spotback Skate",
    binomialName: "Atlantoraja castelnaui",

    imageUrl: atlantorajaCastelnauiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Atlantoraja",
    species: "castelnaui",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-300 m",
};