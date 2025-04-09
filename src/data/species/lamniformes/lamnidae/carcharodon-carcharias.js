import carcharodonCarchariasImg from "./../../../../images/carcharodon-carcharias.png";
import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION } from "../../../../constants/enums";

export const carcharodonCarcharias = {
    commonName: "Great White Shark",
    alternativeNames: ["White Shark", "White Pointer", "Great White"],
    binomialName: "Carcharodon carcharias",

    imageUrl: carcharodonCarchariasImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Lamnidae",
    genus: "Carcharodon",
    species: "carcharias",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};