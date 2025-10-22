import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import himanturaPastinacoidesImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/himantura-pastinacoides.png";

export const himanturaPastinacoides = {
    commonName: "Round Whipray",
    binomialName: "Himantura pastinacoides",

    imageUrl: himanturaPastinacoidesImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Himantura",
    species: "pastinacoides",

    tags: [
        CONSERVATION_STATUS.EN,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-60 m",
};