import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import squalusChloroculusImg from "./../../../../../images/sharks/squaliformes/squalidae/squalus-chloroculus.webp";

export const squalusChloroculus = {
    commonName: "Greeneye Spurdog",
    binomialName: "Squalus chloroculus",

    imageUrl: squalusChloroculusImg,

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
    species: "chloroculus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "216-1360 m"
};