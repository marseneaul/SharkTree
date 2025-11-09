import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import galeocerdoCuvierImg from "./../../../../images/sharks/carcharhiniformes/galeocerdo-cuvier.webp";
import photographyImg from "./../../../../images/photography/galeocerdo-cuvier.webp";
import photographyImg2 from "./../../../../images/photography/galeocerdo-cuvier-2.webp";
import photographyImg3 from "./../../../../images/photography/galeocerdo-cuvier-3.webp";

export const galeocerdoCuvier = {
    commonName: "Tiger Shark",
    binomialName: "Galeocerdo cuvier",

    imageUrls: [galeocerdoCuvierImg, photographyImg, photographyImg2, photographyImg3],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Galeocerdonidae",
    genus: "Galeocerdo",
    species: "cuvier",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.EMBRYTROPHY,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-1136 m"
};