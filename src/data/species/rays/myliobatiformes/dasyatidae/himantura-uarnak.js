import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import himanturaUarnakImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/himantura-uarnak.webp";

export const himanturaUarnak = {
    commonName: "Reticulate Whipray",
    alternativeNames: ["Honeycomb Stingray", "Coach Whipray"],
    binomialName: "Himantura uarnak",

    imageUrl: himanturaUarnakImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Himantura",
    species: "uarnak",

    tags: [
        CONSERVATION_STATUS.EN,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-50 m",
};