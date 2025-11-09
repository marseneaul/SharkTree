import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import atlantorajaPlatanaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/atlantoraja-platana.webp";

export const atlantorajaPlatana = {
    commonName: "La Plata Skate",
    binomialName: "Atlantoraja platana",

    imageUrl: atlantorajaPlatanaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Atlantoraja",
    species: "platana",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-320 m",
};