import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import hemigaleusMicrostomaImg from "./../../../../../images/carcharhiniformes/hemigaleidae/hemigaleus-microstoma.png";

export const hemigaleusMicrostoma = {
    commonName: "Sicklefin Weasel Shark",
    binomialName: "Hemigaleus microstoma",

    imageUrl: hemigaleusMicrostomaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Hemigaleidae",
    genus: "Hemigaleus",
    species: "microstoma",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-170 m"
};