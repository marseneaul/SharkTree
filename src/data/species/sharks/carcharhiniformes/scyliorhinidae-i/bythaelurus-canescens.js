import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bythaelurusCanescensImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/bythaelurus-canescens.webp";

export const bythaelurusCanescens = {
    commonName: "Dusky Catshark",
    binomialName: "Bythaelurus canescens",

    imageUrl: bythaelurusCanescensImg,

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
    species: "canescens",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "200-732 m"
}