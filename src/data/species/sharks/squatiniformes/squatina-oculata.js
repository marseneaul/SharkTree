import { ANAL_FIN, CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const squatinaOculata = {
    commonName: "Smoothback Angelshark",
    binomialName: "Squatina oculata",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squatiniformes",
    family: "Squatinidae",
    genus: "Squatina",
    species: "oculata",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        FLATTENED_BODY.YES
    ],
    depthRange: "10-500 m"
};