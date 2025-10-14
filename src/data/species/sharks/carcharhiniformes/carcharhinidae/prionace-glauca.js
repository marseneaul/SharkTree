import { BEHAVIOR, CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import prionaceGlaucaImg from "./../../../../../images/carcharhiniformes/carcharhinidae/prionace-glauca.png";

export const prionaceGlauca = {
    commonName: "Blue Shark",
    alternativeNames: ["Great Blue Shark"],
    binomialName: "Prionace glauca",

    imageUrl: prionaceGlaucaImg,        

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Prionace",
    species: "glauca",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        BEHAVIOR.BREACHING
    ],
    depthRange: "0-1000 m"
};