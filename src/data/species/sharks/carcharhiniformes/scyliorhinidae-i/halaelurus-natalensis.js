import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import halaelurusNatalensisImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/halaelurus-natalensis.webp";
import photographyImg from "./../../../../../images/photography/halaelurus-natalensis.webp";
import photographyImg2 from "./../../../../../images/photography/halaelurus-natalensis-2.webp";

export const halaelurusNatalensis = {
    commonName: "Tiger Catshark",
    binomialName: "Halaelurus natalensis",

    imageUrls: [halaelurusNatalensisImg, photographyImg, photographyImg2],

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
    species: "natalensis",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-172 m"
}