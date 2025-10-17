import { BEHAVIOR, CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import myliobatisFreminvilleiImg from "./../../../../../images/rays/myliobatiformes/myliobatidae/myliobatis-freminvillei.png";

export const myliobatisFreminvillei = {
    commonName: "Bullnose Ray",
    binomialName: "Myliobatis freminvillei",
    imageUrl: myliobatisFreminvilleiImg,

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
        CONSERVATION_STATUS.VU,
        // "A review of elasmobranch breaching behavior: why do sharks and rays propel themselves out of the water into the air?"
        BEHAVIOR.BREACHING,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        NUM_DORSAL_FINS.ONE,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-122 m",
};