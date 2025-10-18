import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajaAsteriasImg from "./../../../../../images/rays/rajiformes/rajidae/raja-asterias.png";

export const rajaAsterias = {
    commonName: "Mediterranean Starry Ray",
    binomialName: "Raja asterias",

    imageUrl: rajaAsteriasImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Raja",
    species: "asterias",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-200 m",
};