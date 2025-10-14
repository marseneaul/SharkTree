import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import squalusJaponicusImg from "./../../../../../images/squaliformes/squalidae/squalus-japonicus.png";

export const squalusJaponicus = {
    commonName: "Japanese Spurdog",
    binomialName: "Squalus japonicus",

    imageUrl: squalusJaponicusImg,

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
    species: "japonicus",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "52-400 m"
};