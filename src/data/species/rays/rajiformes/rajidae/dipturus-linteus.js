import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusLinteusImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-linteus.webp";

export const dipturusLinteus = {
    commonName: "Sailray",
    binomialName: "Dipturus linteus",

    imageUrl: dipturusLinteusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "linteus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "196-635 m",
};