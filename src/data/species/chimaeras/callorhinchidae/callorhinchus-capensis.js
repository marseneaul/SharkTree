import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";

export const callorhinchusCapensis = {
    commonName: "Cape Elephantfish",
    alternativeNames: ["St Joseph Shark", "Josef"],
    binomialName: "Callorhinchus capensis",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Callorhinchidae",
    genus: "Callorhinchus",
    species: "capensis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.PLOUGH_LIKE,
    ],
    depthRange: "0-600 m",
};