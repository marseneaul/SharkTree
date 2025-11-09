import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import torpedoNobilianaImg from "./../../../../images/rays/torpediniformes/torpedo-nobiliana.webp";
import photographyImg from "./../../../../images/photography/torpedo-nobiliana.webp";

export const torpedoNobiliana = {
    commonName: "Atlantic Torpedo",
    binomialName: "Torpedo nobiliana",

    imageUrls: [torpedoNobilianaImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Torpedinidae",
    genus: "Torpedo",
    species: "nobiliana",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "0-925 m",
};