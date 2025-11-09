import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import dasyatisUshieiImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/dasyatis-ushiei.webp";

export const dasyatisUshiei = {
    commonName: "Cow Stingray",
    alternativeNames: ["Ushi Stingray"],
    binomialName: "Dasyatis ushiei",

    imageUrl: dasyatisUshieiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Dasyatis",
    species: "ushiei",

    tags: [
        CONSERVATION_STATUS.VU,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-800",
};