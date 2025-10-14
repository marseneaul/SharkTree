import { CONSERVATION_STATUS, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import ginglymostomaCirratumImg from "./../../../../images/orectolobiformes/ginglymostoma-cirratum.png";

export const ginglymostomaCirratum = {
    commonName: "Nurse Shark",
    binomialName: "Ginglymostoma cirratum",

    imageUrl: ginglymostomaCirratumImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Orectolobiformes",
    family: "Ginglymostomatidae",
    genus: "Ginglymostoma",
    species: "cirratum",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES
    ],
    depthRange: "0-130 m"
};