import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import proscylliumHabereiImg from "./../../../../images/carcharhiniformes/proscyllium-haberei.png";

export const proscylliumHaberei = {
    commonName: "Graceful Catshark",
    binomialName: "Proscyllium haberei",

    imageUrl: proscylliumHabereiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Proscylliidae",
    genus: "Proscyllium",
    species: "haberei",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "50-320 m"
};