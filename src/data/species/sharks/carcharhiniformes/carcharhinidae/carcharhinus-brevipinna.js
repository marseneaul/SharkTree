import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusBrevipinnaImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-brevipinna.webp";
import photographyImg from "./../../../../../images/photography/carcharhinus-brevipinna.webp";

export const carcharhinusBrevipinna = {
    commonName: "Spinner Shark",
    binomialName: "Carcharhinus brevipinna",

    imageUrls: [carcharhinusBrevipinnaImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Carcharhinus",
    species: "brevipinna",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-200 m"
};