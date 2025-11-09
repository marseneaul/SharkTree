import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import atelomycterusMarmoratusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-ii/atelomycterus-marmoratus.webp";

export const atelomycterusMarmoratus = {
    commonName: "Coral Catshark",
    binomialName: "Atelomycterus marmoratus",

    imageUrl: atelomycterusMarmoratusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Atelomycterus",
    species: "marmoratus",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "5-100 m"
};