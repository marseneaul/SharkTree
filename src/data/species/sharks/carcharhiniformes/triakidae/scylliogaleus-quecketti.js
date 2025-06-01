
import scylliogaleusQueckettiImg from "../../../../../images/carcharhiniformes/triakidae/scylliogaleus-quecketti.jpg";
import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";

export const scylliogaleusQuecketti = {
    commonName: "Flapnose Houndshark",
    binomialName: "Scylliogaleus quecketti",

    imageUrl: scylliogaleusQueckettiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Triakidae",
    genus: "Scylliogaleus",
    species: "quecketti",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-73 m"
};