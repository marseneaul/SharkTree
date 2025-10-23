import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import triaenodonObesusImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/triaenodon-obesus.png";
import photographyImg from "./../../../../../images/photography/triaenodon-obesus.jpg";

export const triaenodonObesus = {
    commonName: "Whitetip Reef Shark",
    binomialName: "Triaenodon obesus",

    imageUrls: [triaenodonObesusImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Triaenodon",
    species: "obesus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-330 m"
};