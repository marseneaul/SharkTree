import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import squalusBrevirostrisImg from "./../../../../../images/sharks/squaliformes/squalidae/squalus-brevirostris.webp";

export const squalusBrevirostris = {
    commonName: "Japanese Shortnose Spurdog",
    binomialName: "Squalus brevirostris",

    imageUrl: squalusBrevirostrisImg,

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
    species: "brevirostris",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "40-342 m"
};