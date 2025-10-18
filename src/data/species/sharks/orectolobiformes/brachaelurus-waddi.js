import { CONSERVATION_STATUS, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import brachaelurusWaddiImg from "./../../../../images/sharks/orectolobiformes/brachaelurus-waddi.png";

export const brachaelurusWaddi = {
    commonName: "Blind Shark",
    alternativeNames: ["Brown Catshark", "Dusky Dogfish"],
    binomialName: "Brachaelurus waddi",

    imageUrl: brachaelurusWaddiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Orectolobiformes",
    family: "Brachaeluridae",
    genus: "Brachaelurus",
    species: "waddi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES
    ],
    depthRange: "0-140 m"
};