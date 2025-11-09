import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusSignatusImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-signatus.webp";

export const carcharhinusSignatus = {
    commonName: "Night Shark",
    binomialName: "Carcharhinus signatus",

    imageUrl: carcharhinusSignatusImg,

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
    species: "signatus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-600 m"
};