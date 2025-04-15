import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const centrophorusMoluccensis = {
    commonName: "Smallfin Gulper Shark",
    alternativeNames: ["Endeavour Dogfish"],
    binomialName: "Centrophorus moluccensiss",

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
    species: "moluccensiss",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "128-823 m"
};