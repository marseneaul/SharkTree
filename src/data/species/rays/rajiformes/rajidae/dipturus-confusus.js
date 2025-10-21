import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusConfususImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-confusus.png";

export const dipturusConfusus = {
    commonName: "Australian Longnose Skate",
    binomialName: "Dipturus confusus",

    imageUrl: dipturusConfususImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "confusus",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "20-600 m",
};