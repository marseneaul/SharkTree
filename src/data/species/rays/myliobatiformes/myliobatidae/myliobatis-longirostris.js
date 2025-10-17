import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import myliobatisLongirostrisImg from "./../../../../../images/rays/myliobatiformes/myliobatidae/myliobatis-longirostris.png";

export const myliobatisLongirostris = {
    commonName: "Longnose Eagle Ray",
    alternativeNames: ["Snouted Eagle Ray"],
    binomialName: "Myliobatis longirostris",

    imageUrl: myliobatisLongirostrisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Myliobatidae",
    genus: "Myliobatis",
    species: "longirostris",

    tags: [
        CONSERVATION_STATUS.VU,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-65 m",
};