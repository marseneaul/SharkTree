import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import apristurusBrunneusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-brunneus.webp";

export const apristurusBrunneus = {
    commonName: "Brown Catshark",
    binomialName: "Apristurus brunneus",

    imageUrl: apristurusBrunneusImg,

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
    species: "brunneus",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "33-1298 m"
}