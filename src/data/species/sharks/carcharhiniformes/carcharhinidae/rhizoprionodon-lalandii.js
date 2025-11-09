import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import rhizoprionodonLalandiiImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/rhizoprionodon-lalandii.webp";

export const rhizoprionodonLalandii = {
    commonName: "Brazilian Sharpnose Shark",
    binomialName: "Rhizoprionodon lalandii",

    imageUrl: rhizoprionodonLalandiiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Rhizoprionodon",
    species: "lalandii",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "3-149 m"
};