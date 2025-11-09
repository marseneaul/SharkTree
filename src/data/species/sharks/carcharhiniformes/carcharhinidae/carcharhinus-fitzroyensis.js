import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusFitzroyensisImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-fitzroyensis.webp";

export const carcharhinusFitzroyensis = {
    commonName: "Creek Whaler",
    binomialName: "Carcharhinus fitzroyensis",

    imageUrl: carcharhinusFitzroyensisImg,

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
    species: "fitzroyensis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-40 m"
};