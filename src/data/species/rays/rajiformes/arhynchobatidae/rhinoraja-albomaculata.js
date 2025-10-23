import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rhinorajaAlbomaculataImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/rhinoraja-albomaculata.png";

export const rhinorajaAlbomaculata = {
    commonName: "White-Dotted Skate",
    binomialName: "Rhinoraja albomaculata",

    imageUrl: rhinorajaAlbomaculataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Rhinoraja",
    species: "albomaculata",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "55-945 m",
};