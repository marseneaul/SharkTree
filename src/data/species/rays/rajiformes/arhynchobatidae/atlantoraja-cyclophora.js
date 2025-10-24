import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import atlantorajaCyclophoraImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/atlantoraja-cyclophora.png";

export const atlantorajaCyclophora = {
    commonName: "Eyespot Skate",
    binomialName: "Atlantoraja cyclophora",

    imageUrl: atlantorajaCyclophoraImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Atlantoraja",
    species: "cyclophora",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-320 m",
};