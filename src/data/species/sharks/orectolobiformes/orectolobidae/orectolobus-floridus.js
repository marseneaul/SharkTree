import { CONSERVATION_STATUS, FLATTENED_BODY, MOUTH_IN_FRONT_OF_EYES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import orectolobusFloridusImg from "./../../../../../images/sharks/orectolobiformes/orectolobidae/orectolobus-floridus.png";

export const orectolobusFloridus = {
    commonName: "Floral Banded Wobbegong",
    binomialName: "Orectolobus floridus",

    imageUrl: orectolobusFloridusImg,

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
    species: "floridus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES,
        FLATTENED_BODY.YES
    ],
    depthRange: "42-85 m"
};