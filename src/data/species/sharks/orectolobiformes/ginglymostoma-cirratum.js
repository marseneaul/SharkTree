import { CONSERVATION_STATUS, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import ginglymostomaCirratumImg from "./../../../../images/sharks/orectolobiformes/ginglymostoma-cirratum.webp";
import photographyImg from "./../../../../images/photography/ginglymostoma-cirratum.webp";

export const ginglymostomaCirratum = {
    commonName: "Nurse Shark",
    binomialName: "Ginglymostoma cirratum",

    imageUrls: [ginglymostomaCirratumImg, photographyImg],

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