import { CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const rhynchobatusAustraliae = {
    commonName: "White-Spotted Guitarfish",
    alternativeNames: ["White-Spotted Wedgefish", "Bottlenose Wedgefish"],
    binomialName: "Rhynchobatus australiae",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Rhinidae",
    genus: "Rhynchobatus",
    species: "australiae",

    tags: [
        CONSERVATION_STATUS.CR,
        FLATTENED_BODY.NO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-60 m",
};