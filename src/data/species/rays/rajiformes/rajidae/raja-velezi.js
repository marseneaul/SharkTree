import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajaVeleziImg from "./../../../../../images/rays/rajiformes/rajidae/raja-velezi.png";

export const rajaVelezi = {
    commonName: "Velez Ray",
    binomialName: "Raja velezi",

    imageUrl: rajaVeleziImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Raja",
    species: "velezi",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "30-300 m",
};