import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusAmblyrhynchosImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-amblyrhynchos.png";
import photographyImg from "./../../../../../images/photography/carcharhinus-amblyrhynchos.jpg";

export const carcharhinusAmblyrhynchos = {
    commonName: "Grey Reef Shark",
    binomialName: "Carcharhinus amblyrhynchos",

    imageUrls: [carcharhinusAmblyrhynchosImg, photographyImg],

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
    species: "amblyrhynchos",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-280 m"
}