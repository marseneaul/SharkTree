import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import sympterygiaBonapartiiImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/sympterygia-bonapartii.png";

export const sympterygiaBonapartii = {
    commonName: "Smallnose Fanskate",
    binomialName: "Sympterygia bonapartii",

    imageUrl: sympterygiaBonapartiiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Sympterygia",
    species: "bonapartii",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-500 m",
};