import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const pastinachusSephen = {
    commonName: "Cowtail Stingray",
    binomialName: "Pastinachus sephen",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Pastinachus",
    species: "sephen",

    tags: [
        CONSERVATION_STATUS.NT,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-60 m",
};