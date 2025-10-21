import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import aptychotremaRostrataImg from "./../../../../images/rays/rhinopristiformes/aptychotrema-rostrata.png";

export const aptychotremaRostrata = {
    commonName: "Eastern Shovelnose Ray",
    binomialName: "Aptychotrema rostrata",

    imageUrl: aptychotremaRostrataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Trygonorrhinidae",
    genus: "Aptychotrema",
    species: "rostrata",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-220 m",
};