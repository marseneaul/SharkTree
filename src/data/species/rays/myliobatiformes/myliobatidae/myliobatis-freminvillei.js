import { BEHAVIOR, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../../constants/enums";

export const myliobatisFreminvillei = {
    commonName: "Bullnose Ray",
    binomialName: "Myliobatis freminvillei",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Myliobatidae",
    genus: "Myliobatis",
    species: "freminvillei",

    tags: [
        // "A review of elasmobranch breaching behavior: why do sharks and rays propel themselves out of the water into the air?"
        BEHAVIOR.BREACHING,
        TAIL_SPINES.YES,
        NUM_DORSAL_FINS.ONE,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};