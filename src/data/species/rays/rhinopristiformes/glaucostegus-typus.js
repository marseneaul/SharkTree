import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import glaucostegusTypusImg from "./../../../../images/rays/rhinopristiformes/glaucostegus-typus.webp";

export const glaucostegusTypus = {
    commonName: "Common Shovelnose Ray",
    alternativeNames: ["Giant Shovelnose Ray", "Giant Guitarfish"],
    binomialName: "Glaucostegus typus",

    imageUrl: glaucostegusTypusImg,
    
    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Glaucostegidae",
    genus: "Glaucostegus",
    species: "typus",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-100 m",
};