import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import urogymnusAsperrimusImg from "./../../../../../images/rays/myliobatiformes/dasyatidae/urogymnus-asperrimus.png";

export const urogymnusAsperrimus = {
    commonName: "Porcupine Ray",
    binomialName: "Urogymnus asperrimus",

    imageUrl: urogymnusAsperrimusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Dasyatidae",
    genus: "Urogymnus",
    species: "asperrimus",

    tags: [
        CONSERVATION_STATUS.EN,
        TAIL_SPINES.NO,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ZERO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-130 m",
};