import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusHealdiImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-healdi.webp";

export const dipturusHealdi = {
    commonName: "Heald's Skate",
    binomialName: "Dipturus healdi",

    imageUrl: dipturusHealdiImg,


    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "healdi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "304-520 m",
};