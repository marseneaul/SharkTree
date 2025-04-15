import { CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const heterodontusGaleatus = {
    commonName: "Crested Bullhead Shark",
    alternativeNames: ["Crested Shark", "Crested Bull Shark", "Crested Horn Shark", "Crested Port Jackson Shark"],
    binomialName: "Heterodontus galeatus",

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
    species: "galeatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "0-93 m"
};