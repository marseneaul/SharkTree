import alopiasPelagicusImg from "./../../../../images/lamniformes/alopias-pelagicus.jpeg";
import { BEHAVIOR, CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION } from "../../../../constants/enums";

export const alopiasPelagicus = {
    commonName: "Pelagic Thresher",
    binomialName: "Alopias pelagicus",

    imageUrl: alopiasPelagicusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Alopiidae",
    genus: "Alopias",
    species: "pelagicus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL,
        BEHAVIOR.BREACHING
    ],
    depthRange: "0-300 m"
};