import { CONSERVATION_STATUS, FLATTENED_BODY, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import orectolobusOrnatusImg from "./../../../../../images/sharks/orectolobiformes/orectolobidae/orectolobus-ornatus.png";

export const orectolobusOrnatus = {
    commonName: "Ornate Wobbegong",
    alternativeNames: ["Banded Wobbegong"],
    binomialName: "Orectolobus ornatus",

    imageUrl: orectolobusOrnatusImg,

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
    species: "ornatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES,
        FLATTENED_BODY.YES
    ],
    depthRange: "0-100 m"
};