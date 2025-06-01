import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION } from "../../../../../constants/enums";
import isurusPaucusImg from "./../../../../../images/lamniformes/lamnidae/isurus-paucus.png";

export const isurusPaucus = {
    commonName: "Longfin Mako Shark",
    binomialName: "Isurus paucus",

    imageUrl: isurusPaucusImg,

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
    species: "paucus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "0-1752 m"
};