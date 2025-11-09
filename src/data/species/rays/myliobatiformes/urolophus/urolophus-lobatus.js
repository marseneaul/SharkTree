import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import urolophusLobatusImg from "./../../../../../images/rays/myliobatiformes/urolophus/urolophus-lobatus.webp";

export const urolophusLobatus = {
    commonName: "Lobed Stingaree",
    binomialName: "Urolophus lobatus",

    imageUrl: urolophusLobatusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urolophidae",
    genus: "Urolophus",
    species: "lobatus",

    tags: [
        CONSERVATION_STATUS.LC,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-30 m",
};