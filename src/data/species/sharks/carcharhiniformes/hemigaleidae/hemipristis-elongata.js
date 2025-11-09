import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import hemipristisElongataImg from "./../../../../../images/sharks/carcharhiniformes/hemigaleidae/hemipristis-elongata.webp";

export const hemipristisElongata = {
    commonName: "Snaggletooth Shark",
    alternativeNames: ["Fossil Shark"],
    binomialName: "Hemipristis elongata",

    imageUrl: hemipristisElongataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Hemigaleidae",
    genus: "Hemipristis",
    species: "elongata",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-132 m"
};