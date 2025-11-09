import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import aetomylaeusMilvusImg from "./../../../../../images/rays/myliobatiformes/myliobatidae/aetomylaeus-milvus.webp";

export const aetomylaeusMilvus = {
    commonName: "Smooth Eagle Ray",
    binomialName: "Aetomylaeus milvus",

    imageUrl: aetomylaeusMilvusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Myliobatidae",
    genus: "Aetomylaeus",
    species: "milvus",

    tags: [
        CONSERVATION_STATUS.EN,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-90 m",
};