import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, PROXIMAL_DORSAL_FINS, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusLeucasImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-leucas.png";

export const carcharhinusLeucas = {
    commonName: "Bull Shark",
    binomialName: "Carcharhinus leucas",

    imageUrl: carcharhinusLeucasImg,

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
    species: "leucas",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        PROXIMAL_DORSAL_FINS.YES
    ],
    depthRange: "0-164 m"
};