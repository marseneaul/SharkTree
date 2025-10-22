import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import himanturaOxyrhynchaImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/himantura-oxyrhyncha.png";

export const himanturaOxyrhyncha = {
    commonName: "Marbled Whipray",
    binomialName: "Himantura oxyrhyncha",

    imageUrl: himanturaOxyrhynchaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Himantura",
    species: "oxyrhyncha",

    tags: [
        CONSERVATION_STATUS.EN,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "1-100 m",
};