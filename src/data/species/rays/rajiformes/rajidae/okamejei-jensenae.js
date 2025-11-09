import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import okamejeiJensenaeImg from "./../../../../../images/rays/rajiformes/rajidae/okamejei-jensenae.webp";

export const okamejeiJensenae = {
    commonName: "Sulu Sea Skate",
    binomialName: "Okamejei jensenae",

    imageUrl: okamejeiJensenaeImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Okamejei",
    species: "jensenae",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "110-118 m",
};