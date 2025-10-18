import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import apristurusLaurussoniiImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-laurussonii.png";

export const apristurusLaurussonii = {
    commonName: "Iceland Catshark",
    alternativeNames: ["Icelandic Catshark"],
    binomialName: "Apristurus laurussonii",

    imageUrl: apristurusLaurussoniiImg,

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
    species: "laurussonii",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "560-2060 m"
}