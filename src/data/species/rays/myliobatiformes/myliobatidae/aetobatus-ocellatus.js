import { BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";

export const aetobatusOcellatus = {
    commonName: "Ocellated Eagle Ray",
    alternativeNames: ["Whitespotted Eagle Ray"],
    binomialName: "Aetobatus ocellatus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Aetobatidae",
    genus: "Aetobatus",
    species: "ocellatus",

    tags: [
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        GROUP_BEHAVIOR.SCHOOLING,
        NUM_DORSAL_FINS.ONE,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};