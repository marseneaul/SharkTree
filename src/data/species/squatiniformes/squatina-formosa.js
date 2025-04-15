import { ANAL_FIN, CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const squatinaFormosa = {
    commonName: "Taiwan Angelshark",
    binomialName: "Squatina formosa",

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
    species: "formosa",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        FLATTENED_BODY.YES
    ],
    depthRange: "100-400 m"
};