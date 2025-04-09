import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../constants/enums";

export const carcharhinusPlumbeus = {
    commonName: "Sandbar Shark",
    binomialName: "Carcharhinus plumbeus",

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
    species: "plumbeus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        GROUP_BEHAVIOR.SOLITARY, GROUP_BEHAVIOR.SCHOOLING,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ]
};