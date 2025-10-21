import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import dipturusTrachydermaImg from "./../../../../../images/rays/rajiformes/rajidae/dipturus-trachyderma.png";

export const dipturusTrachyderma = {
    commonName: "Roughskin Skate",
    binomialName: "Dipturus trachyderma",
    
    imageUrl: dipturusTrachydermaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Dipturus",
    species: "trachyderma",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "85-480 m",
};