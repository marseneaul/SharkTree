import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import leucorajaGarmaniImg from "./../../../../../images/rays/rajiformes/rajidae/leucoraja-garmani.webp";

export const leucorajaGarmani = {
    commonName: "Rosette Skate",
    binomialName: "Leucoraja garmani",

    imageUrl: leucorajaGarmaniImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Leucoraja",
    species: "garmani",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "35-530 m",
};