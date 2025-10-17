import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import torpedoFuscomaculataImg from "./../../../../images/rays/torpediniformes/torpedo-fuscomaculata.png";

export const torpedoFuscomaculata = {
    commonName: "Black-Spotted Torpedo",
    binomialName: "Torpedo fuscomaculata",

    imageUrl: torpedoFuscomaculataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Torpedinidae",
    genus: "Torpedo",
    species: "fuscomaculata",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "0-440 m",
};