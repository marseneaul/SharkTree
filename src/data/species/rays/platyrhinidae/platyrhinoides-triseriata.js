import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, VENOMOUS_SPINE } from "../../../../constants/enums";

export const platyrhinoidesTriseriata = {
    commonName: "Thornback Guitarfish",
    binomialName: "Platyrhinoidis triseriata",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Platyrhinidae",
    genus: "Platyrhinoidis",
    species: "triseriata",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        VENOMOUS_SPINE.NO,
    ],
    depthRange: "6-137 m",
};