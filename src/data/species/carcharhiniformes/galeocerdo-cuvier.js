import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const galeocerdoCuvier = {
    commonName: "Tiger Shark",
    binomialName: "Galeocerdo cuvier",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Galeocerdonidae",
    genus: "Galeocerdo",
    species: "cuvier",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.EMBRYTROPHY,
        NICTITATING_MEMBRANE.YES
    ]
};