import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const psuedocarchariasKamoharai = {
    commonName: "Crocodile Shark",
    binomialName: "Psuedocarcharias kamoharai",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Pseudocarchariidae",
    genus: "Psuedocarcharias",
    species: "kamoharai",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};