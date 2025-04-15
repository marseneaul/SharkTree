import { CONSERVATION_STATUS, FLATTENED_BODY, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const orectolobusMaculatus = {
    commonName: "Spotted Wobbegong",
    alternativeNames: ["Carpet Shark", "Common Carpet Shark", "Common Catshark", "Tassel Shark", "Wobbegong"],
    binomialName: "Orectolobus maculatus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Orectolobiformes",
    family: "Orectolobidae",
    genus: "Orectolobus",
    species: "maculatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES,
        FLATTENED_BODY.YES
    ],
    depthRange: "0-218 m"
};