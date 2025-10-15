import { CONSERVATION_STATUS, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import parascylliumCollareImg from "./../../../../images/orectolobiformes/parascyllium-collare.png";

export const parascylliumCollare = {
    commonName: "Collared Carpetshark",
    binomialName: "Parascyllium collare",

    imageUrl: parascylliumCollareImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Orectolobiformes",
    family: "Parascylliidae",
    genus: "Parascyllium",
    species: "collare",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES
    ],
    depthRange: "20-175 m"
};