import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import amblyrajaHyperboreaImg from "./../../../../../images/rays/rajiformes/rajidae/amblyraja-hyperborea.png";

export const amblyrajaHyperborea = {
    commonName: "Arctic Skate",
    binomialName: "Amblyraja hyperborea",

    imageUrl: amblyrajaHyperboreaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Amblyraja",
    species: "hyperborea",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "260-2500 m",
};