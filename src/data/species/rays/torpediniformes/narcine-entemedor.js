import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import narcineEntemedorImg from "./../../../../images/rays/torpediniformes/narcine-entemedor.webp";

export const narcineEntemedor = {
    commonName: "Giant Electric Ray",
    alternativeNames: ["Cortez Electric Ray"],
    binomialName: "Narcine entemedor",

    imageUrl: narcineEntemedorImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Narcinidae",
    genus: "Narcine",
    species: "entemedor",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "0-100 m",
};