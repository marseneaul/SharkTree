import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajellaLeopardusImg from "./../../../../../images/rays/rajiformes/rajidae/rajella-leopardus.webp";

export const rajellaLeopardus = {
    commonName: "Leopard Skate",
    binomialName: "Rajella leopardus",

    imageUrl: rajellaLeopardusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Rajella",
    species: "leopardus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "130-1920 m",
};