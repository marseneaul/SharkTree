import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";

export const centrophorusZeehaani = {
    commonName: "Southern Dogfish",
    binomialName: "Centrophorus zeehaani",

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
    species: "zeehaani",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "208-701 m"
};