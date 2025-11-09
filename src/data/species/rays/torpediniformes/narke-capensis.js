import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import narkeCapensisImg from "./../../../../images/rays/torpediniformes/narke-capensis.webp";

export const narkeCapensis = {
    commonName: "Onefin Electric Ray",
    alternativeNames: ["Cape Numbfish"],
    binomialName: "Narke capensis",

    imageUrl: narkeCapensisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Narkidae",
    genus: "Narke",
    species: "capensis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "3-115 m",
};