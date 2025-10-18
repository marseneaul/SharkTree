import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import gollumAttenuatusImg from "./../../../../images/sharks/carcharhiniformes/gollum-attenuatus.png";

export const gollumAttenuatus = {
    commonName: "Slender Smooth-Hound",
    alternativeNames: ["Gollumshark"],
    binomialName: "Gollum attenuatus",

    imageUrl: gollumAttenuatusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Pseudotriakidae",
    genus: "Gollum",
    species: "attenuatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "130-975 m"
};