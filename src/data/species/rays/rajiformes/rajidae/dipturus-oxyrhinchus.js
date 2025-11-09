import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusOxyrhinchusImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-oxyrinchus.webp";

export const dipturusOxyrhinchus = {
    commonName: "Longnose Skate",
    binomialName: "Dipturus oxyrinchus",

    imageUrl: dipturusOxyrhinchusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "oxyrinchus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "70-1230 m",
};