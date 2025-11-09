import { BEHAVIOR, CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, FEEDING_BEHAVIOR, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION } from "../../../../constants/enums";
import cetorhinusMaximusImg from "./../../../../images/sharks/lamniformes/cetorhinus-maximus.webp";

export const cetorhinusMaximus = {
    commonName: "Basking Shark",
    binomialName: "Cetorhinus maximus",

    imageUrl: cetorhinusMaximusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Cetorhinidae",
    genus: "Cetorhinus",
    species: "maximus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
        FEEDING_BEHAVIOR.CARNIVOROUS, FEEDING_BEHAVIOR.PLANKTIVOROUS,
        BEHAVIOR.BREACHING,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "0-1264 m"
};