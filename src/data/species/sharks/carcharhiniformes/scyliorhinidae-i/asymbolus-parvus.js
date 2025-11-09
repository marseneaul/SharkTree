import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import asymbolusParvusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/asymbolus-parvus.webp";

export const asymbolusParvus = {
    commonName: "Dwarf Catshark",
    binomialName: "Asymbolus parvus",

    imageUrl: asymbolusParvusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Asymbolus",
    species: "parvus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "160-360 m"
}