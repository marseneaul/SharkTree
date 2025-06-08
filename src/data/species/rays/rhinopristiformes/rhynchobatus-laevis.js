import { CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const rhynchobatusLaevis = {
    commonName: "Smooth Wedgefish",
    binomialName: "Rhynchobatus laevis",

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