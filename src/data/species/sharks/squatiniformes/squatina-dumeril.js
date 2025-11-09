import { ANAL_FIN, CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import squatinaDumerilImg from "./../../../../images/sharks/squatiniformes/squatina-dumeril.webp";
    
export const squatinaDumeril = {
    commonName: "Atlantic Angelshark",
    binomialName: "Squatina dumeril",

    imageUrl: squatinaDumerilImg,

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
    species: "dumeril",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        FLATTENED_BODY.YES
    ],
    depthRange: "0-1290 m"
};