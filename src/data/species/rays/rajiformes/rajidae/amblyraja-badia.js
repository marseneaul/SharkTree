import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import amblyrajaBadiaImg from "./../../../../../images/rays/rajiformes/rajidae/amblyraja-badia.png";

export const amblyrajaBadia = {
    commonName: "Broad Skate",
    binomialName: "Amblyraja badia",

    imageUrl: amblyrajaBadiaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Amblyraja",
    species: "badia",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "846-2324 m",
};