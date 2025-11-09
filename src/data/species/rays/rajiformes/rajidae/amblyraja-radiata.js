import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import amblyrajaRadiataImg from "./../../../../../images/rays/rajiformes/rajidae/amblyraja-radiata.webp";

export const amblyrajaRadiata = {
    commonName: "Thorny Skate",
    binomialName: "Amblyraja radiata",

    imageUrl: amblyrajaRadiataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Amblyraja",
    species: "radiata",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-1400 m",
};