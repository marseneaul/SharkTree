import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusInnominatusImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-innominatus.webp";

export const dipturusInnominatus = {
    commonName: "New Zealand Smooth Skate",
    binomialName: "Dipturus innominatus",

    imageUrl: dipturusInnominatusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "innominatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-1300 m",
};