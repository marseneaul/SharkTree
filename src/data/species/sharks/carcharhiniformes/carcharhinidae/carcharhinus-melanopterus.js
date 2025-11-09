import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusMelanopterusImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-melanopterus.webp";
import photographyImg from "./../../../../../images/photography/carcharhinus-melanopterus.webp";

export const carcharhinusMelanopterus = {
    commonName: "Blacktip Reef Shark",
    binomialName: "Carcharhinus melanopterus",

    imageUrls: [carcharhinusMelanopterusImg, photographyImg],

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
    species: "melanopterus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-75 m"
};