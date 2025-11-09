import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusLaevisImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-laevis.webp";

export const dipturusLaevis = {
    commonName: "Barndoor Skate",
    binomialName: "Dipturus laevis",

    imageUrl: dipturusLaevisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "laevis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "10-1174 m",
};