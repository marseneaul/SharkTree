import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import paragaleusRandalliImg from "./../../../../../images/carcharhiniformes/hemigaleidae/paragaleus-randalli.png";

export const paragaleusRandalli = {
    commonName: "Slender Weasel Shark",
    binomialName: "Paragaleus randalli",

    imageUrl: paragaleusRandalliImg,

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
    species: "randalli",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "1-18 m"
};