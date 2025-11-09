import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import aetobatusFlagellumImg from "./../../../../../images/rays/myliobatiformes/myliobatidae/aetobatus-flagellum.webp";

export const aetobatusFlagellum = {
    commonName: "Longheaded Eagle Ray",
    binomialName: "Aetobatus flagellum",

    imageUrl: aetobatusFlagellumImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Aetobatidae",
    genus: "Aetobatus",
    species: "flagellum",

    tags: [
        CONSERVATION_STATUS.EN,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ONE,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-40 m",
};