import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import zapteryxExasperataImg from "./../../../../images/rays/rhinopristiformes/zapteryx-exasperata.png";

export const zapteryxExasperata = {
    commonName: "Banded Guitarfish",
    alternativeNames: ["Mottled Guitarfish", "Prickly Skate", "Striped Guitarfish"],
    binomialName: "Zapteryx exasperata",

    imageUrl: zapteryxExasperataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Trygonorrhinidae",
    genus: "Zapteryx",
    species: "exasperata",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-200 m",
};