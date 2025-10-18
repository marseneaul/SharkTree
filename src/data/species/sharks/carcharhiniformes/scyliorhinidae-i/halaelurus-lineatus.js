import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import halaelurusLineatusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/halaelurus-lineatus.png";

export const halaelurusLineatus = {
    commonName: "Lined Catshark",
    alternativeNames: ["Banded Catshark"],
    binomialName: "Halaelurus lineatus",

    imageUrl: halaelurusLineatusImg,

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
    species: "lineatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-290 m"
}