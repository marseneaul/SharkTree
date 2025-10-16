import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import galeusAraeImg from "./../../../../../images/carcharhiniformes/scyliorhinidae-i/galeus-arae.png";

export const galeusArae = {
    commonName: "Roughtail Catshark",
    alternativeNames: ["Marbled Catshark"],
    binomialName: "Galeus arae",

    imageUrl: galeusAraeImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Galeus",
    species: "arae",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "292-732 m"
}