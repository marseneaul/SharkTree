import { BEHAVIOR, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const pristisPristis = {
    commonName: "Largetooth Sawfish",
    alternativeNames: ["Common Sawfish", "Wide Sawfish", "Freshwater Sawfish", "River Sawfish", "Leichhardt's Sawfish", "Northern Sawfish"],
    binomialName: "Pristis pristis",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Pristidae",
    genus: "Pristis",
    species: "pristis",

    tags: [
        CONSERVATION_STATUS.CR,
        // "A review of elasmobranch breaching behavior: why do sharks and rays propel themselves out of the water into the air?"
        BEHAVIOR.BREACHING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-60 m",
};