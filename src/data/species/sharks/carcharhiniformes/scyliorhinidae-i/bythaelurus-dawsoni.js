import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bythaelurusDawsoniImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/bythaelurus-dawsoni.webp";

export const bythaelurusDawsoni = {
    commonName: "New Zealand Catshark",
    binomialName: "Bythaelurus dawsoni",

    imageUrl: bythaelurusDawsoniImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Bythaelurus",
    species: "dawsoni",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "50-976 m"
}