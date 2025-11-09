import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rostrorajaAlbaImg from "./../../../../../images/rays/rajiformes/rajidae/rostroraja-alba.webp";

export const rostrorajaAlba = {
    commonName: "Bottlenose Skate",
    alternativeNames: ["Spearnose Skate", "White Skate"],
    binomialName: "Rostroraja alba",

    imageUrl: rostrorajaAlbaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Rostroraja",
    species: "alba",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "10-750 m",
};