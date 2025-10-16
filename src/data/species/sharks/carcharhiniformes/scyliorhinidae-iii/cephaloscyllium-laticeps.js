import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import cephaloscylliumLaticepsImg from "./../../../../../images/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-laticeps.png";

export const cephaloscylliumLaticeps = {
    commonName: "Australian Swellshark",
    binomialName: "Cephaloscyllium laticeps",

    imageUrl: cephaloscylliumLaticepsImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Cephaloscyllium",
    species: "laticeps",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-60 m"
};