import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import apristurusExsanguisImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-exsanguis.webp";

export const apristurusExsanguis = {
    commonName: "Flaccid Catshark",
    binomialName: "Apristurus exsanguis",

    imageUrl: apristurusExsanguisImg,

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
    species: "exsanguis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "415-1200 m"
}