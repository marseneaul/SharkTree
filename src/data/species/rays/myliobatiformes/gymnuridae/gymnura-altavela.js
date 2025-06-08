import { NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const gymnuraAltavela = {
    commonName: "Spiny Butterfly Ray",
    alternativeNames: ["Giant Butterfly Ray"],
    binomialName: "Gymnura altavela",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Gymnuridae",
    genus: "Gymnura",
    species: "altavela",

    tags: [
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NUM_DORSAL_FINS.ZERO,
    ],
};