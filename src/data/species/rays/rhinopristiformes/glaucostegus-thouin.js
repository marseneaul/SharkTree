import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import glaucostegusThouinImg from "./../../../../images/rays/rhinopristiformes/glaucostegus-thouin.png";

export const glaucostegusThouin = {
    commonName: "Clubnose Guitarfish",
    binomialName: "Glaucostegus thouin",

    imageUrl: glaucostegusThouinImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Glaucostegidae",
    genus: "Glaucostegus",
    species: "thouin",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-60 m",
};