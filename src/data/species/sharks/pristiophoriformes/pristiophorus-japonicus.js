import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import pristiophorusJaponicusImg from "./../../../../images/sharks/pristiophoriformes/pristiophorus-japonicus.webp";

export const pristiophorusJaponicus = {
    commonName: "Japanese Sawshark",
    binomialName: "Pristiophorus japonicus",

    imageUrl: pristiophorusJaponicusImg,

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
    species: "japonicus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "10-1240 m"
};