import { CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const heterodontusZebra = {
    commonName: "Zebra Bullhead Shark",
    binomialName: "Heterodontus zebra",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Heterodontiformes",
    family: "Heterodontidae",
    genus: "Heterodontus",
    species: "zebra",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "0-50 m"
};