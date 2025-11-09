import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import loxodonMacrorhinusImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/loxodon-macrorhinus.webp";

export const loxodonMacrorhinus = {
    commonName: "Sliteye Shark",
    binomialName: "Loxodon macrorhinus",

    imageUrl: loxodonMacrorhinusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Loxodon",
    species: "macrorhinus",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "2-120 m"
};