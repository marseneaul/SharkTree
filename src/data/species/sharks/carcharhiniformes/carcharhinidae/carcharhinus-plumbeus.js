import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, PROXIMAL_DORSAL_FINS, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusPlumbeusImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-plumbeus.webp";
import photographyImg from "./../../../../../images/photography/carcharhinus-plumbeus.webp";
import photographyImg2 from "./../../../../../images/photography/carcharhinus-plumbeus-2.webp";

export const carcharhinusPlumbeus = {
    commonName: "Sandbar Shark",
    binomialName: "Carcharhinus plumbeus",

    imageUrls: [carcharhinusPlumbeusImg, photographyImg, photographyImg2],

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
        SPIRACLES.NO,
        PROXIMAL_DORSAL_FINS.YES
    ],
    depthRange: "0-280 m"
};