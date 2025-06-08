import { BEHAVIOR, GROUP_BEHAVIOR, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";

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
        GROUP_BEHAVIOR.SCHOOLING,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};