import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import torpedoMarmorataImg from "./../../../../images/rays/torpediniformes/torpedo-marmorata.png";
import photographyImg from "./../../../../images/photography/torpedo-marmorata.jpg";

export const torpedoMarmorata = {
    commonName: "Marbled Electric Ray",
    binomialName: "Torpedo marmorata",

    imageUrls: [torpedoMarmorataImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Torpedinidae",
    genus: "Torpedo",
    species: "marmorata",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "0-370 m",
};