import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import urolophusViridisImg from "./../../../../../images/rays/myliobatiformes/urolophus/urolophus-viridis.png";

export const urolophusViridis = {
    commonName: "Greenback Stingaree",
    binomialName: "Urolophus viridis",

    imageUrl: urolophusViridisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urolophidae",
    genus: "Urolophus",
    species: "viridis",

    tags: [
        CONSERVATION_STATUS.VU,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "20-330 m",
};