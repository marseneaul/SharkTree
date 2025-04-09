import { CAUDAL_FIN_SHAPE, FEEDING_BEHAVIOR } from "../../../constants/enums";

export const megachasmaPelagios = {
    commonName: "Megamouth Shark",
    binomialName: "Megachasma pelagios",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Megachasmidae",
    genus: "Megachasma",
    species: "pelagios",

    tags: [
        FEEDING_BEHAVIOR.CARNIVOROUS, FEEDING_BEHAVIOR.PLANKTIVOROUS,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};