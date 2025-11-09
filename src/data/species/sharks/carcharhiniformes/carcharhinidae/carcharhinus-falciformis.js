import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import carcharhinusFalciformisImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/carcharhinus-falciformis.webp";
import photographyImg from "./../../../../../images/photography/carcharhinus-falciformis.webp";
import photographyImg2 from "./../../../../../images/photography/carcharhinus-falciformis-2.webp";
import photographyImg3 from "./../../../../../images/photography/carcharhinus-falciformis-3.webp";
import photographyImg4 from "./../../../../../images/photography/carcharhinus-falciformis-4.webp";

export const carcharhinusFalciformis = {
    commonName: "Silky Shark",
    alternativeNames: ["Blackspot Shark", "Gray Whaler Shark", "Olive Shark", "Ridgeback Shark", "Sickle Shark", "Sickle-Shaped Shark", "Sickle Silk Shark"],
    binomialName: "Carcharhinus falciformis",

    imageUrls: [carcharhinusFalciformisImg, photographyImg, photographyImg2, photographyImg3, photographyImg4],

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
    species: "falciformis",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "18-500 m"
};