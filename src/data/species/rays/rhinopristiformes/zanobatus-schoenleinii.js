import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import zanobatusSchoenleiniiImg from "./../../../../images/rays/rhinopristiformes/zanobatus-schoenleinii.webp";

export const zanobatusSchoenleinii = {
    commonName: "Striped Panray",
    binomialName: "Zanobatus schoenleinii",

    imageUrl: zanobatusSchoenleiniiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Zanobatidae",
    genus: "Zanobatus",
    species: "schoenleinii",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-60 m",
};