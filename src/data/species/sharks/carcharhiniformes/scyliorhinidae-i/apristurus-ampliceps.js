import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import apristurusAmplicepsImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-ampliceps.webp";

export const apristurusAmpliceps = {
    commonName: "Roughskin Catshark",
    binomialName: "Apristurus ampliceps",

    imageUrl: apristurusAmplicepsImg,

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
    species: "ampliceps",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "800-1503 m"
}