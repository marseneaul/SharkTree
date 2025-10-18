import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusPullopunctatusImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-pullopunctatus.png";

export const dipturusPullopunctatus = {
    commonName: "Slime Skate",
    binomialName: "Dipturus pullopunctatus",

    imageUrl: dipturusPullopunctatusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "pullopunctatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "15-457 m",
};