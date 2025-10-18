import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import paragaleusPectoralisImg from "./../../../../../images/sharks/carcharhiniformes/hemigaleidae/paragaleus-pectoralis.png";

export const paragaleusPectoralis = {
    commonName: "Atlantic Weasel Shark",
    alternativeNames: ["Little Tiger Shark"],
    binomialName: "Paragaleus pectoralis",

    imageUrl: paragaleusPectoralisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Hemigaleidae",
    genus: "Paragaleus",
    species: "pectoralis",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-100 m"
};