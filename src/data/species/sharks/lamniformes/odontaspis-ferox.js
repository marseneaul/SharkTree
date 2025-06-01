import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION } from "../../../../constants/enums";

export const odontaspisFerox = {
    commonName: "Smalltooth Sand Tiger",
    alternativeNames: ["Bumpytail Ragged-Tooth"],
    binomialName: "Odontaspis ferox",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Odontaspididae",
    genus: "Odontaspis",
    species: "ferox",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        TEMPERATURE_REGULATION.REGIONALLY_ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "10-1015 m"
};