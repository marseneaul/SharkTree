import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusTenguImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-tengu.webp";

export const dipturusTengu = {
    commonName: "Acutenose Skate",
    binomialName: "Dipturus tengu",

    imageUrl: dipturusTenguImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "tengu",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "45-400 m",
};