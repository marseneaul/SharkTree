import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import centroscylliumGranulatumImg from "./../../../../../images/sharks/squaliformes/etmopteridae/centroscyllium-granulatum.webp";

export const centroscylliumGranulatum = {
    commonName: "Granular Dogfish",
    binomialName: "Centroscyllium granulatum",

    imageUrl: centroscylliumGranulatumImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Etmopteridae",
    genus: "Centroscyllium",
    species: "granulatum",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "262-500 m"
};