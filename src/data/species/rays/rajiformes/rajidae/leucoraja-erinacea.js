import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import leucorajaErinaceaImg from "./../../../../../images/rays/rajiformes/rajidae/leucoraja-erinacea.webp";

export const leucorajaErinacea = {
    commonName: "Little Skate",
    binomialName: "Leucoraja erinacea",

    imageUrl: leucorajaErinaceaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Leucoraja",
    species: "erinacea",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "10-110 m",
};