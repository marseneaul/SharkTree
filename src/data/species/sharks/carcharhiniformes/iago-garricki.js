import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import iagoGarrickiImg from "./../../../../images/sharks/carcharhiniformes/iago-garricki.webp";
export const iagoGarricki = {
    commonName: "Longnose Houndshark",
    binomialName: "Iago garricki",

    imageUrl: iagoGarrickiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Triakidae",
    genus: "Iago",
    species: "garricki",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "250-475 m"
};