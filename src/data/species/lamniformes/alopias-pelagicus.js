import { CAUDAL_FIN_SHAPE, TEMPERATURE_REGULATION } from "../../../constants/enums";

export const alopiasPelagicus = {
    commonName: "Pelagic Thresher",
    binomialName: "Alopias pelagicus",

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
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};