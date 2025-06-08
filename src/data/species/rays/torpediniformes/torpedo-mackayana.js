import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const torpedoMackayana = {
    commonName: "Ringed Torpedo",
    alternativeNames: ["Western African Torpedo", "West African Torpedo Ray", "McKay Electric Ray", "McKay's Torpedo Ray"],
    binomialName: "Torpedo mackayana",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Torpedinidae",
    genus: "Torpedo",
    species: "mackayana",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "5-50 m",
};