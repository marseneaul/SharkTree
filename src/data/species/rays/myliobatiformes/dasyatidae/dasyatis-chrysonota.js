import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import dasyatisChrysonotaImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/dasyatis-chrysonota.png";

export const dasyatisChrysonota = {
    commonName: "Blue Stingray",
    binomialName: "Dasyatis chrysonota",

    imageUrl: dasyatisChrysonotaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Dasyatis",
    species: "chrysonota",

    tags: [
        CONSERVATION_STATUS.NT,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-110 m",
};