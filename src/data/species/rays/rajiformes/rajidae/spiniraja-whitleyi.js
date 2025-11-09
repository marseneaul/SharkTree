import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import spinirajaWhitleyiImg from "./../../../../../images/rays/rajiformes/rajidae/spiniraja-whitleyi.webp";

export const spinirajaWhitleyi = {
    commonName: "Melbourne Ray",
    binomialName: "Spiniraja whitleyi",

    imageUrl: spinirajaWhitleyiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Spiniraja",
    species: "whitleyi",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-345 m",
};