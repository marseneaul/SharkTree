import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusAustralisImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-australis.png";

export const dipturusAustralis = {
    commonName: "Sydney Skate",
    binomialName: "Dipturus australis",

    imageUrl: dipturusAustralisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "australis",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "20-325 m",
};