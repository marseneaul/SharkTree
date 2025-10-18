import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import amblyrajaJenseniImg from "./../../../../../images/rays/rajiformes/rajidae/amblyraja-jenseni.png";

export const amblyrajaJenseni = {
    commonName: "Jensen's Skate",
    alternativeNames: ["Shortail Skate"],
    binomialName: "Amblyraja jenseni",

    imageUrl: amblyrajaJenseniImg,
    
    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Amblyraja",
    species: "jenseni",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "265-2550 m",
};