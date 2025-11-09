import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusMaclotiImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-macloti.webp";

export const carcharhinusMacloti = {
    commonName: "Hardnose Shark",
    binomialName: "Carcharhinus macloti",

    imageUrl: carcharhinusMaclotiImg,

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
    species: "macloti",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-200 m"
};