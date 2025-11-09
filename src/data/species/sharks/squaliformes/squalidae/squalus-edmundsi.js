import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import squalusEdmundsiImg from "./../../../../../images/sharks/squaliformes/squalidae/squalus-edmundsi.webp";

export const squalusEdmundsi = {
    commonName: "Edmund's Spurdog",
    binomialName: "Squalus edmundsi",

    imageUrl: squalusEdmundsiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Squalidae",
    genus: "Squalus",
    species: "edmundsi",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "204-850 m"
};