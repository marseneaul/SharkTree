import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import apristurusPlatyrhynchusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-platyrhynchus.png";

export const apristurusPlatyrhynchus = {
    commonName: "Spatulasnout Catshark",
    alternativeNames: ["Borneo Catshark", "Flatnose Catshark"],
    binomialName: "Apristurus platyrhynchus",

    imageUrl: apristurusPlatyrhynchusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Apristurus",
    species: "platyrhynchus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "400-1080 m"
}