import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajaMontaguiImg from "./../../../../../images/rays/rajiformes/rajidae/raja-montagui.png";

export const rajaMontagui = {
    commonName: "Spotted Ray",
    alternativeNames: ["Spotted Skate"],
    binomialName: "Raja montagui",

    imageUrl: rajaMontaguiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Raja",
    species: "montagui",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "10-800 m",
};