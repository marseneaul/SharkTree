import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import bathyrajaPallidaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/bathyraja-pallida.webp";

export const bathyrajaPallida = {
    commonName: "Pale Ray",
    binomialName: "Bathyraja pallida",

    imageUrl: bathyrajaPallidaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Bathyraja",
    species: "pallida",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "1869-3366 m",
};