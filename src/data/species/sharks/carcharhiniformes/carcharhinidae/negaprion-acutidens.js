import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import negaprionAcutidensImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/negaprion-acutidens.webp";

export const negaprionAcutidens = {
    commonName: "Sicklefin Lemon Shark",
    alternativeNames: ["Pacific Lemon Shark"],
    binomialName: "Negaprion acutidens",

    imageUrl: negaprionAcutidensImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Negaprion",
    species: "acutidens",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-90 m"
};