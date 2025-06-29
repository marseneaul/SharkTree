import { CONSERVATION_STATUS, FLATTENED_BODY, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";

export const eucrossorhinusDasypogon = {
    commonName: "Tasselled Wobbegong",
    alternativeNames: ["Bearded Wobbegong", "Ogilby's Wobbegong"],
    binomialName: "Eucrossorhinus dasypogon",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Orectolobiformes",
    family: "Orectolobidae",
    genus: "Eucrossorhinus",
    species: "dasypogon",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES,
        FLATTENED_BODY.YES
    ],
    depthRange: "0-50 m"
};