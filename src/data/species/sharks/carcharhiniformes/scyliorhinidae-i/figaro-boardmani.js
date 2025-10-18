import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import figaroBoardmaniImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/figaro-boardmani.png";

export const figaroBoardmani = {
    commonName: "Australian Sawtail Catshark",
    binomialName: "Figaro boardmani",

    imageUrl: figaroBoardmaniImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Figaro",
    species: "boardmani",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "130-640 m"
}