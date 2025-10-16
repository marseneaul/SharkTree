import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import hypogaleusHyugaensisImg from "./../../../../../images/carcharhiniformes/triakidae/hypogaleus-hyugaensis.png";

export const hypogaleusHyugaensis = {
    commonName: "Blacktip Tope",
    alternativeNames: ["Pencil Shark", "Blacktip Topeshark"],
    binomialName: "Hypogaleus hyugaensis",

    imageUrl: hypogaleusHyugaensisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Triakidae",
    genus: "Hypogaleus",
    species: "hyugaensis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "40-480 m"
};