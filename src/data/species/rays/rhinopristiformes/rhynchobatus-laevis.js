import { CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import rhynchobatusLaevisImg from "./../../../../images/rays/rhinopristiformes/rhynchobatus-laevis.webp";

export const rhynchobatusLaevis = {
    commonName: "Smooth Wedgefish",
    binomialName: "Rhynchobatus laevis",

    imageUrl: rhynchobatusLaevisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Rhinidae",
    genus: "Rhynchobatus",
    species: "laevis",

    tags: [
        CONSERVATION_STATUS.CR,
        FLATTENED_BODY.NO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-60 m",
};