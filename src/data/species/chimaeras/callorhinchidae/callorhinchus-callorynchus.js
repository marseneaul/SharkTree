import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import callorhinchusCallorynchusImg from "./../../../../images/chimaeras/callorhinchidae/callorhinchus-callorynchus.webp";

export const callorhinchusCallorynchus = {
    commonName: "American Elephantfish",
    alternativeNames: ["Cockfish"],
    binomialName: "Callorhinchus callorynchus",

    imageUrl: callorhinchusCallorynchusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Callorhinchidae",
    genus: "Callorhinchus",
    species: "callorynchus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.PLOUGH_LIKE,
    ],
    depthRange: "10-481 m",
};