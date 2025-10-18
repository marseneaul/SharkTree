import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajellaCaudaspinosaImg from "./../../../../../images/rays/rajiformes/rajidae/rajella-caudaspinosa.png";

export const rajellaCaudaspinosa = {
    commonName: "Munchkin Skate",
    binomialName: "Rajella caudaspinosa",

    imageUrl: rajellaCaudaspinosaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Rajella",
    species: "caudaspinosa",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "100-1100 m",
};