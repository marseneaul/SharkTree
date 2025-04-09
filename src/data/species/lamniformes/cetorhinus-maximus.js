import { CAUDAL_FIN_SHAPE, FEEDING_BEHAVIOR, TEMPERATURE_REGULATION } from "../../../constants/enums";

export const cetorhinusMaximus = {
    commonName: "Basking Shark",
    binomialName: "Cetorhinus maximus",

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
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
        FEEDING_BEHAVIOR.CARNIVOROUS, FEEDING_BEHAVIOR.PLANKTIVOROUS,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};