import { BIOLUMINESCENT, CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import scyliorhinusRetiferImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-iii/scyliorhinus-retifer.png";

export const scyliorhinusRetifer = {
    commonName: "Chain Catshark",
    alternativeNames: ["Chain Dogfish"],
    binomialName: "Scyliorhinus retifer",

    imageUrl: scyliorhinusRetiferImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Scyliorhinus",
    species: "retifer",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        BIOLUMINESCENT.YES
    ],
    depthRange: "73-754 m"
};