import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import deaniaCalceaImg from "./../../../../../images/sharks/squaliformes/centrophoridae/deania-calcea.webp";

export const deaniaCalcea = {
    commonName: "Birdbeak Dogfish",
    binomialName: "Deania calcea",

    imageUrl: deaniaCalceaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Centrophoridae",
    genus: "Deania",
    species: "calcea",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "60-1600 m"
};