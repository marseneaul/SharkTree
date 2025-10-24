import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import torpedoSinuspersiciImg from "./../../../../images/rays/torpediniformes/torpedo-sinuspersici.png";
import photographyImg from "./../../../../images/photography/torpedo-sinuspersici.jpg";

export const torpedoSinuspersici = {
    commonName: "Gulf Torpedo",
    alternativeNames: ["Variable Electric Ray"],
    binomialName: "Torpedo sinuspersici",

    imageUrls: [torpedoSinuspersiciImg, photographyImg],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Torpedinidae",
    genus: "Torpedo",
    species: "sinuspersici",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "0-150 m",
};