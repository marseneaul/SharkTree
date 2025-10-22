import { BEHAVIOR, CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../constants/enums";
import megatrygonMicropsImg from "./../../../../images/rays/myliobatiformes/megatrygon-microps.png";

export const megatrygonMicrops = {
    commonName: "Smalleye Stingray",
    binomialName: "Megatrygon microps",

    imageUrl: megatrygonMicropsImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Megatrygon",
    species: "microps",

    tags: [
        CONSERVATION_STATUS.DD,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        BEHAVIOR.MIGRATING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-222 m",
};