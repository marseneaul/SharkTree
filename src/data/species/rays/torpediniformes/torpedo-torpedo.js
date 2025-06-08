import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const torpedoTorpedo = {
    commonName: "Common Torpedo",
    alternativeNames: ["Ocellate Torpedo", "Eyed Electric Ray"],
    binomialName: "Torpedo torpedo",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Torpedinidae",
    genus: "Torpedo",
    species: "torpedo",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "0-320 m",
};