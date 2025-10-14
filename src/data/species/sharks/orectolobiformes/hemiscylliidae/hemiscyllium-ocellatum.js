import { CONSERVATION_STATUS, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import hemiscylliumOcellatumImg from "./../../../../../images/orectolobiformes/hemiscylliidae/hemiscyllium-ocellatum.png";

export const hemiscylliumOcellatum = {
    commonName: "Epaulette Shark",
    binomialName: "Hemiscyllium ocellatum",

    imageUrl: hemiscylliumOcellatumImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Orectolobiformes",
    family: "Hemiscylliidae",
    genus: "Hemiscyllium",
    species: "ocellatum",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES
    ],
    depthRange: "0-40 m"
}