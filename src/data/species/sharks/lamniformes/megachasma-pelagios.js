import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, FEEDING_BEHAVIOR, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

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
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        FEEDING_BEHAVIOR.CARNIVOROUS, FEEDING_BEHAVIOR.PLANKTIVOROUS,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "5-1500 m"
};