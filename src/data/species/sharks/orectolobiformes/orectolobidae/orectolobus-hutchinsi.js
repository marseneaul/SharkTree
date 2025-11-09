import { CONSERVATION_STATUS, FLATTENED_BODY, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import orectolobusHutchinsiImg from "./../../../../../images/sharks/orectolobiformes/orectolobidae/orectolobus-hutchinsi.webp";

export const orectolobusHutchinsi = {
    commonName: "Western Wobbegong",
    binomialName: "Orectolobus hutchinsi",

    imageUrl: orectolobusHutchinsiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Orectolobiformes",
    family: "Orectolobidae",
    genus: "Orectolobus",
    species: "hutchinsi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES,
        FLATTENED_BODY.YES
    ],
    depthRange: "0-106 m"
};