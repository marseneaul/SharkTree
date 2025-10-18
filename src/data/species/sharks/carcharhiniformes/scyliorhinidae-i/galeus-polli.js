import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import galeusPolliImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/galeus-polli.png";

export const galeusPolli = {
    commonName: "African Sawtail Catshark",
    binomialName: "Galeus polli",

    imageUrl: galeusPolliImg,

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
    species: "polli",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "159-720 m"
}