import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusGudgeriImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-gudgeri.webp";

export const dipturusGudgeri = {
    commonName: "Greenback Skate",
    binomialName: "Dipturus gudgeri",

    imageUrl: dipturusGudgeriImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "gudgeri",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "160-765 m",
};