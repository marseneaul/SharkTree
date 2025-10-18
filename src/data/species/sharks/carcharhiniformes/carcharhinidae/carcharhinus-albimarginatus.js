import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusAlbimarginatusImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-albimarginatus.png";

export const carcharhinusAlbimarginatus = {
    commonName: "Silvertip Shark",
    binomialName: "Carcharhinus albimarginatus",

    imageUrl: carcharhinusAlbimarginatusImg,

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
    species: "albimarginatus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-800 m"
};