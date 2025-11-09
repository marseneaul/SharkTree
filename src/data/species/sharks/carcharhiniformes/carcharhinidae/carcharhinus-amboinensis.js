import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, PROXIMAL_DORSAL_FINS, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusAmboinensisImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-amboinensis.webp";

export const carcharhinusAmboinensis = {
    commonName: "Pigeye Shark",
    binomialName: "Carcharhinus amboinensis",

    imageUrl: carcharhinusAmboinensisImg,

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
    species: "amboinensis",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        PROXIMAL_DORSAL_FINS.YES
    ],
    depthRange: "0-60 m"
};