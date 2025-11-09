import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import triakisSemifasciataImg from "./../../../../../images/sharks/carcharhiniformes/triakidae/triakis-semifasciata.webp";
import photographyImg from "./../../../../../images/photography/triakis-semifasciata.webp";

export const triakisSemifasciata = {
    commonName: "Leopard Shark",
    alternativeNames: ["Tiger Shark", "Catshark"],
    binomialName: "Triakis semifasciata",

    imageUrls: [triakisSemifasciataImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Triakidae",
    genus: "Triakis",
    species: "semifasciata",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "1-91 m"
};