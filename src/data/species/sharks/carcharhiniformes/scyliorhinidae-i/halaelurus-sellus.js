import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import halaelurusSellusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/halaelurus-sellus.webp";

export const halaelurusSellus = {
    commonName: "Rusty Catshark",
    binomialName: "Halaelurus sellus",

    imageUrl: halaelurusSellusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Halaelurus",
    species: "sellus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "60-165 m"
}