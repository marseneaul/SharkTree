import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajaClavataImg from "./../../../../../images/rays/rajiformes/rajidae/raja-clavata.webp";
import photographyImg from "./../../../../../images/photography/raja-clavata.webp";

export const rajaClavata = {
    commonName: "Thornback Ray",
    alternativeNames: ["Thornback Skate"],
    binomialName: "Raja clavata",

    imageUrls: [rajaClavataImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Raja",
    species: "clavata",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "5-1020 m",
};