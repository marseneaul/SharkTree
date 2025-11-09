import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import aetomylaeusVespertilioImg from "./../../../../../images/rays/myliobatiformes/myliobatidae/aetomylaeus-vespertilio.webp";

export const aetomylaeusVespertilio = {
    commonName: "Ornate Eagle Ray",
    alternativeNames: ["Reticulate Eagle Ray"],
    binomialName: "Aetomylaeus vespertilio",

    imageUrl: aetomylaeusVespertilioImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Myliobatidae",
    genus: "Aetomylaeus",
    species: "vespertilio",

    tags: [
        CONSERVATION_STATUS.CR,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.NO,
        VENOMOUS_SPINE.NO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-110 m",
};