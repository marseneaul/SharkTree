import { NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const aetobatusFlagellum = {
    commonName: "Longheaded Eagle Ray",
    binomialName: "Aetobatus flagellum",

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
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ONE,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};