import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import negaprionBrevirostrisImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/negaprion-brevirostris.png";
import photographyImg from "./../../../../../images/photography/negaprion-brevirostris.jpg";
import photographyImg2 from "./../../../../../images/photography/negaprion-brevirostris-2.jpg";
import photographyImg3 from "./../../../../../images/photography/negaprion-brevirostris-3.jpg";
import photographyImg4 from "./../../../../../images/photography/negaprion-brevirostris-4.jpg";

export const negaprionBrevirostris = {
    commonName: "Lemon Shark",
    alternativeNames: ["Atlantic Lemon Shark"],
    binomialName: "Negaprion brevirostris",

    imageUrls: [negaprionBrevirostrisImg, photographyImg, photographyImg2, photographyImg3, photographyImg4],

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
    species: "brevirostris",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-92 m"
};