import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import urobatisHalleriImg from "./../../../../../images/rays/myliobatiformes/urotrygonidae/urobatis-halleri.png";

export const urobatisHalleri = {
    commonName: "Round Stingray",
    alternativeNames: ["Haller's Round Ray", "Little Round Stingray"],
    binomialName: "Urobatis halleri",

    imageUrl: urobatisHalleriImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urotrygonidae",
    genus: "Urobatis",
    species: "halleri",

    tags: [
        CONSERVATION_STATUS.LC,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "15-91 m",
};