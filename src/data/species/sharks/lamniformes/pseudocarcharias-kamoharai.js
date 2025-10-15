import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import pseudocarchariasKamoharaiImg from "./../../../../images/lamniformes/pseudocarcharias-kamoharai.png";

export const pseudocarchariasKamoharai = {
    commonName: "Crocodile Shark",
    binomialName: "Pseudocarcharias kamoharai",

    imageUrl: pseudocarchariasKamoharaiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Pseudocarchariidae",
    genus: "Pseudocarcharias",
    species: "kamoharai",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "0-590 m"
};