import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const mitsukurinaOwstoni = {
    commonName: "Goblin Shark",
    binomialName: "Mitsukruina owstoni",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Mitsukurinidae",
    genus: "Mitsukruina",
    species: "owstoni",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "0-1300 m" 
};