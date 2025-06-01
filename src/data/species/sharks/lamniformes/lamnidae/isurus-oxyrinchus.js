import { BEHAVIOR, CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION } from "../../../../../constants/enums";
import isurusOxyrinchusImg from "./../../../../../images/lamniformes/lamnidae/isurus-oxyrinchus.png";

export const isurusOxyrinchus = {
    commonName: "Shortfin Mako",
    alternativeNames: ["Shortfin Mako Shark", "Blue Pointer", "Bonito Shark", "Mako Shark"],
    binomialName: "Isurus oxyrinchus",

    imageUrl: isurusOxyrinchusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Lamnidae",
    genus: "Isurus",
    species: "oxyrinchus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        BEHAVIOR.BREACHING,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "0-888 m"
};