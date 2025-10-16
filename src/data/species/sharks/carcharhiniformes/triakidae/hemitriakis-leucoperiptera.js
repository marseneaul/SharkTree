import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import hemitriakisLeucoperipteraImg from "./../../../../../images/carcharhiniformes/triakidae/hemitriakis-leucoperiptera.png";

export const hemitriakisLeucoperiptera = {
    commonName: "Whitefin Topeshark",
    binomialName: "Hemitriakis leucoperiptera",

    imageUrl: hemitriakisLeucoperipteraImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Triakidae",
    genus: "Hemitriakis",
    species: "leucoperiptera",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-48 m"
};