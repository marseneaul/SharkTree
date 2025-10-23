import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import crurirajaHulleyiImg from "./../../../../images/rays/rajiformes/cruriraja-hulleyi.png";

export const crurirajaHulleyi = {
    commonName: "Cuban Leg Skate",
    binomialName: "Cruriraja hulleyi",

    imageUrl: crurirajaHulleyiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Gurgesiellidae",
    genus: "Cruriraja",
    species: "hulleyi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "40-545 m",
};