import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../constants/enums";

export const carcharhinusAmblyrhynchoides = {
    commonName: "Graceful Shark",
    alternativeNames: ["Queensland Shark"],
    binomialName: "Carcharhinus amblyrhynchoides",

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
    species: "amblyrhynchoides",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-50 m"
};