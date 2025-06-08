import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const neotrygonKuhlii = {
    commonName: "Blue-Spotted Stingray",
    alternativeNames: ["Blue-Spotted Maskray", "Kuhl's Stingray"],
    binomialName: "Neotrygon kuhlii",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Neotrygon",
    species: "kuhlii",

    tags: [
        CONSERVATION_STATUS.DD,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-90 m",
};