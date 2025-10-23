import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import rhinobatosSchlegeliiImg from "./../../../../images/rays/rhinopristiformes/rhinobatos-schlegelii.png";
import photographyImg from "./../../../../images/photography/rhinobatos-schlegelii.jpg";

export const rhinobatosSchlegelii = {
    commonName: "Brown Guitarfish",
    binomialName: "Rhinobatos schlegelii",

    imageUrls: [rhinobatosSchlegeliiImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Rhinobatidae",
    genus: "Rhinobatos",
    species: "schlegelii",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "1-230 m",
};