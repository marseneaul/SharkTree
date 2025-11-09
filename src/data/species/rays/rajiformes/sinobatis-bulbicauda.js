import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import sinobatisBulbicaudaImg from "./../../../../images/rays/rajiformes/sinobatis-bulbicauda.webp";

export const sinobatisBulbicauda = {
    commonName: "Western Australian Legskate",
    binomialName: "Sinobatis bulbicauda",

    imageUrl: sinobatisBulbicaudaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Anacanthobatidae",
    genus: "Sinobatis",
    species: "bulbicauda",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "150-1125 m",
};