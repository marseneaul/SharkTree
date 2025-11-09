import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import rhinobatosProductusImg from "./../../../../images/rays/rhinopristiformes/rhinobatos-productus.webp";
import photographyImg from "./../../../../images/photography/rhinobatos-productus.webp";
import photographyImg2 from "./../../../../images/photography/rhinobatos-productus-2.webp";

export const rhinobatosProductus = {
    commonName: "Shovelnose Guitarfish",
    binomialName: "Rhinobatos productus",

    imageUrls: [rhinobatosProductusImg, photographyImg, photographyImg2],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Rhinobatidae",
    genus: "Rhinobatos",
    species: "productus",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "1-91.5 m",
};