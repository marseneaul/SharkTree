import { ANAL_FIN, CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const squatinaAlbipunctata = {
    commonName: "Eastern Angelshark",
    binomialName: "Squatina albipunctata",

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
    species: "albipunctata",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        FLATTENED_BODY.YES
    ],
    depthRange: "35-415 m"
};