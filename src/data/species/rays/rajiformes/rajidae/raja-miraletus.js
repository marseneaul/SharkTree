import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajaMiraletusImg from "./../../../../../images/rays/rajiformes/rajidae/raja-miraletus.webp";

export const rajaMiraletus = {
    commonName: "Brown Ray",
    binomialName: "Raja miraletus",

    imageUrl: rajaMiraletusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Raja",
    species: "miraletus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "50-555 m",
};