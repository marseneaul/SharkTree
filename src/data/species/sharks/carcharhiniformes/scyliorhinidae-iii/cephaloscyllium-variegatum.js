import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import cephaloscylliumVariegatumImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-variegatum.png";

export const cephaloscylliumVariegatum = {
    commonName: "Saddled Swellshark",
    binomialName: "Cephaloscyllium variegatum",

    imageUrl: cephaloscylliumVariegatumImg,

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
    species: "variegatum",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "114-606 m"
};