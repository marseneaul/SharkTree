import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";

export const callorhinchusMilii = {
    commonName: "Australian Ghostshark",
    alternativeNames: ["Elephant Shark", "Makorepe", "Whitefish", "Plough-Nose Chimaera", "Elephant Fish"],
    binomialName: "Callorhinchus milii",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Callorhinchidae",
    genus: "Callorhinchus",
    species: "milii",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.PLOUGH_LIKE,
    ],
    depthRange: "0-200 m",
};