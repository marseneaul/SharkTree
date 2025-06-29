import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";

export const carcharhinusIsodon = {
    commonName: "Finetooth Shark",
    binomialName: "Carcharhinus isodon",

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
    species: "isodon",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-20 m"
};