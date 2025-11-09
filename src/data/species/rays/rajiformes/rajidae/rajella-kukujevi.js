import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import rajellaKukujeviImg from "./../../../../../images/rays/rajiformes/rajidae/rajella-kukujevi.webp";

export const rajellaKukujevi = {
    commonName: "Mid-Atlantic Skate",
    binomialName: "Rajella kukujevi",

    imageUrl: rajellaKukujeviImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Rajella",
    species: "kukujevi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "750-2190 m",
};