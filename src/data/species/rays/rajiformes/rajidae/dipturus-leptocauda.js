import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusLeptocaudaImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-leptocauda.webp";

export const dipturusLeptocauda = {
    commonName: "Thintail Skate",
    binomialName: "Dipturus leptocauda",

    imageUrl: dipturusLeptocaudaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "leptocauda",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "10-550 m",
};