import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusCervaImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-cerva.png";

export const dipturusCerva = {
    commonName: "Whitespotted Skate",
    binomialName: "Dipturus cerva",

    imageUrl: dipturusCervaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "cerva",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "60-470 m",
};