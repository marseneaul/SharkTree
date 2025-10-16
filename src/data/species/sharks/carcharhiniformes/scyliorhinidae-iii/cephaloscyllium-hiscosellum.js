import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import cephaloscylliumHiscosellumImg from "./../../../../../images/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-hiscosellum.png";

export const cephaloscylliumHiscosellum = {
    commonName: "Australian Reticulate Swellshark",
    binomialName: "Cephaloscyllium hiscosellum",

    imageUrl: cephaloscylliumHiscosellumImg,

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
    species: "hiscosellum",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "294-420 m"
};