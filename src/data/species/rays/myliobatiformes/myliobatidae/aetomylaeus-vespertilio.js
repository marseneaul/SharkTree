import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const aetomylaeusVespertilio = {
    commonName: "Ornate Eagle Ray",
    alternativeNames: ["Reticulate Eagle Ray"],
    binomialName: "Aetomylaeus vespertilio",

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