import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import pseudotriakisMicrodonImg from "./../../../../images/carcharhiniformes/pseudotriakis-microdon.png";

export const pseudotriakisMicrodon = {
    commonName: "False Catshark",
    alternativeNames: ["Sofa Shark"],
    binomialName: "Pseudotriakis microdon",

    imageUrl: pseudotriakisMicrodonImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Pseudotriakidae",
    genus: "Pseudotriakis",
    species: "microdon",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "100-2430 m"
};