import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import narcineLastiImg from "./../../../../images/rays/torpediniformes/narcine-lasti.png";

export const narcineLasti = {
    commonName: "Western Numbfish",
    binomialName: "Narcine lasti",

    imageUrl: narcineLastiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Narcinidae",
    genus: "Narcine",
    species: "lasti",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "180-320 m",
};