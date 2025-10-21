import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajaEglanteriaImg from "./../../../../../images/rays/rajiformes/rajidae/raja-eglanteria.png";

export const rajaEglanteria = {
    commonName: "Clearnose Skate",
    binomialName: "Raja eglanteria",

    imageUrl: rajaEglanteriaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Raja",
    species: "eglanteria",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-330 m",
};