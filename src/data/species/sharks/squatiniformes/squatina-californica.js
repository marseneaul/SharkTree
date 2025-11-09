import { ANAL_FIN, CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import squatinaCalifornicaImg from "./../../../../images/sharks/squatiniformes/squatina-californica.webp";
import photographyImg from "./../../../../images/photography/squatina-californica.webp";
import photographyImg2 from "./../../../../images/photography/squatina-californica-2.webp";

export const squatinaCalifornica = {
    commonName: "Pacific Angelshark",
    binomialName: "Squatina californica",

    imageUrls: [squatinaCalifornicaImg, photographyImg, photographyImg2],

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
    species: "californica",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        FLATTENED_BODY.YES
    ],
    depthRange: "0-100 m"
};