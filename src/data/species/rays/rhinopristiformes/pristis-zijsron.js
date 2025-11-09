import { CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import pristisZijsronImg from "./../../../../images/rays/rhinopristiformes/pristis-zijsron.webp";

export const pristisZijsron = {
    commonName: "Longcomb Sawfish",
    alternativeNames: ["Narrowsnout Sawfish", "Green Sawfish"],
    binomialName: "Pristis zijsron",

    imageUrl: pristisZijsronImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Pristidae",
    genus: "Pristis",
    species: "zijsron",

    tags: [
        CONSERVATION_STATUS.CR,
        FLATTENED_BODY.NO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-100 m",
};