import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import iagoOmanensisImg from "./../../../../images/sharks/carcharhiniformes/iago-omanensis.png";

export const iagoOmanensis = {
    commonName: "Bigeye Houndshark",
    binomialName: "Iago omanensis",

    imageUrl: iagoOmanensisImg,

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
    species: "omanensis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "110-1000 m"
};