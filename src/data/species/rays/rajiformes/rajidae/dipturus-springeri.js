import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusSpringeriImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-springeri.webp";

export const dipturusSpringeri = {
    commonName: "Roughbelly Skate",
    binomialName: "Dipturus springeri",

    imageUrl: dipturusSpringeriImg,
    
    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "springeri",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "50-970 m",
};