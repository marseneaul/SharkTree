import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import centrophorusSquamosusImg from "./../../../../../images/sharks/squaliformes/centrophoridae/centrophorus-squamosus.webp";

export const centrophorusSquamosus = {
    commonName: "Leafscale Gulper Shark",
    binomialName: "Centrophorus squamosus",

    imageUrl: centrophorusSquamosusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Centrophoridae",
    genus: "Centrophorus",
    species: "squamosus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "0-3366 m"
};