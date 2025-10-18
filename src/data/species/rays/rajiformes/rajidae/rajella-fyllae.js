import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajellaFyllaeImg from "./../../../../../images/rays/rajiformes/rajidae/rajella-fyllae.png";

export const rajellaFyllae = {
    commonName: "Round Ray",
    binomialName: "Rajella fyllae",

    imageUrl: rajellaFyllaeImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Rajella",
    species: "fyllae",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "150-2050 m",
};