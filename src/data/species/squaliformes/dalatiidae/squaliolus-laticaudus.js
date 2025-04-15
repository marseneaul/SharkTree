import { ANAL_FIN, BIOLUMINESCENT, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const squaliolusLaticaudus = {
    commonName: "Spined Pygmy Shark",
    alternativeNames: ["Dwarf Shark", "Bigeye Dwarf Shark"],
    binomialName: "Squaliolus laticaudus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Dalatiidae",
    genus: "Squaliolus",
    species: "laticaudus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        BIOLUMINESCENT.YES,
        DORSAL_FIN_SPINES.ONLY_ON_FIRST
    ],
    depthRange: "10-1800 m"
};