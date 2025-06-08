import { BEHAVIOR, GROUP_BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";

export const aetobatusLaticeps = {
    commonName: "Pacific White-Spotted Eagle Ray",
    binomialName: "Aetobatus laticeps",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Aetobatidae",
    genus: "Aetobatus",
    species: "laticeps",

    tags: [
        // "A review of elasmobranch breaching behavior: why do sharks and rays propel themselves out of the water into the air?"
        BEHAVIOR.BREACHING,
        BEHAVIOR.MIGRATING,
        NUM_DORSAL_FINS.ONE,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        GROUP_BEHAVIOR.SCHOOLING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};