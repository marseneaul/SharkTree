import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import pristiophorusCirratusImg from "./../../../../images/sharks/pristiophoriformes/pristiophorus-cirratus.png";

export const pristiophorusCirratus = {
    commonName: "Longnose Sawshark",
    alternativeNames: ["Common Sawshark"],
    binomialName: "Pristiophorus cirratus",

    imageUrl: pristiophorusCirratusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Pristiophoriformes",
    family: "Pristiophoridae",
    genus: "Pristiophorus",
    species: "cirratus",


    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "40-630 m"
};