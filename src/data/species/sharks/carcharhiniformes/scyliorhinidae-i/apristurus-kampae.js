import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import apristurusKampaeImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-kampae.webp";

export const apristurusKampae = {
    commonName: "Longnose Catshark",
    binomialName: "Apristurus kampae",

    imageUrl: apristurusKampaeImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Apristurus",
    species: "kampae",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "180-1888 m"
}