import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import centrophorusLusitanicusImg from "./../../../../../images/sharks/squaliformes/centrophoridae/centrophorus-lusitanicus.png";

export const centrophorusLusitanicus = {
    commonName: "Lowfin Gulper Shark",
    binomialName: "Centrophorus lusitanicus",

    imageUrl: centrophorusLusitanicusImg,

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
    species: "lusitanicus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "300-1400 m"
};