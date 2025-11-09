import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import urobatisMaculatusImg from "./../../../../../images/rays/myliobatiformes/urotrygonidae/urobatis-maculatus.webp";

export const urobatisMaculatus = {
    commonName: "Spotted Round Ray",
    alternativeNames: ["Cortez Round Stingray"],
    binomialName: "Urobatis maculatus",

    imageUrl: urobatisMaculatusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urotrygonidae",
    genus: "Urobatis",
    species: "maculatus",

    tags: [
        CONSERVATION_STATUS.LC,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-30 m",
};