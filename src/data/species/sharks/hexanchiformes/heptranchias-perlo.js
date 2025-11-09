import { CONSERVATION_STATUS, NUM_DORSAL_FINS, NUM_GILLS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import heptranchiasPerloImg from "./../../../../images/sharks/hexanchiformes/heptranchias-perlo.webp";

export const heptranchiasPerlo = {
    commonName: "Sharpnose Sevengill Shark",
    binomialName: "Heptranchias perlo",

    imageUrl: heptranchiasPerloImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Hexanchiformes",
    family: "Hexanchidae",
    genus: "Heptranchias",
    species: "perlo",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NUM_GILLS.SEVEN, 
        NUM_DORSAL_FINS.ONE
    ],
    depthRange: "0-1000 m"
};