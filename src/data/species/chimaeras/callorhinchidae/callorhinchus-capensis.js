import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import callorhinchusCapensisImg from "./../../../../images/chimaeras/callorhinchidae/callorhinchus-capensis.webp";

export const callorhinchusCapensis = {
    commonName: "Cape Elephantfish",
    alternativeNames: ["St Joseph Shark", "Josef"],
    binomialName: "Callorhinchus capensis",

    imageUrl: callorhinchusCapensisImg,

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