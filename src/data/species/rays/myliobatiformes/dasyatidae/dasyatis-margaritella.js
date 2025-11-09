import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import dasyatisMargaritellaImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/dasyatis-margaritella.webp";

export const dasyatisMargaritella = {
    commonName: "Pearl Stingray",
    binomialName: "Dasyatis margaritella",

    imageUrl: dasyatisMargaritellaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Dasyatis",
    species: "margaritella",

    tags: [
        CONSERVATION_STATUS.NT,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-60 m",
};