import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import trygonorrhinaDumeriliiImg from "./../../../../images/rays/rhinopristiformes/trygonorrhina-dumerilii.png";

export const trygonorrhinaDumerilii = {
    commonName: "Southern Fiddler Ray",
    binomialName: "Trygonorrhina dumerilii",

    imageUrl: trygonorrhinaDumeriliiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Trygonorrhinidae",
    genus: "Trygonorrhina",
    species: "dumerilii",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "30-205 m",
};