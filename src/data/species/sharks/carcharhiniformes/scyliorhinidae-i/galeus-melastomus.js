import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import galeusMelastomusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/galeus-melastomus.webp";

export const galeusMelastomus = {
    commonName: "Blackmouth Catshark",
    binomialName: "Galeus melastomus",

    imageUrl: galeusMelastomusImg,

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
    species: "melastomus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "55-2000 m"
}