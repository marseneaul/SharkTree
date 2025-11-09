import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import galeusMurinusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/galeus-murinus.webp";

export const galeusMurinus = {
    commonName: "Mouse Catshark",
    binomialName: "Galeus murinus",

    imageUrl: galeusMurinusImg,

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
    species: "murinus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "380-1300 m"
}