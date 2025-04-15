import { BIOLUMINESCENT, CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const cephaloscylliumVentriosum = {
    commonName: "Swellshark",
    binomialName: "Cephaloscyllium ventriosum",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Cephaloscyllium",
    species: "ventriosum",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        BIOLUMINESCENT.YES
    ],
    depthRange: "5-500 m"
};