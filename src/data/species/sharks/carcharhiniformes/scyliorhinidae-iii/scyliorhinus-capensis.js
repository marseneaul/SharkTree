import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import scyliorhinusCapensisImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-iii/scyliorhinus-capensis.png";

export const scyliorhinusCapensis = {
    commonName: "Yellowspotted Catshark",
    binomialName: "Scyliorhinus capensis",

    imageUrl: scyliorhinusCapensisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Scyliorhinus",
    species: "capensis",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "26-695 m"
};