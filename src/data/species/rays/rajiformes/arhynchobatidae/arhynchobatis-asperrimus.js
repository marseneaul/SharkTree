import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import arhynchobatisAsperrimusImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/arhynchobatis-asperrimus.png";

export const arhynchobatisAsperrimus = {
    commonName: "Longtail Skate",
    binomialName: "Arhynchobatis asperrimus",

    imageUrl: arhynchobatisAsperrimusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Arhynchobatis",
    species: "asperrimus",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "70-1095 m",
};