import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import mitsukurinaOwstoniImg from "./../../../../images/sharks/lamniformes/mitsukurina-owstoni.png";

export const mitsukurinaOwstoni = {
    commonName: "Goblin Shark",
    binomialName: "Mitsukurina owstoni",

    imageUrl: mitsukurinaOwstoniImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Mitsukurinidae",
    genus: "Mitsukurina",
    species: "owstoni",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "0-1300 m" 
};