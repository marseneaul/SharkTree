import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import centroscylliumRitteriImg from "./../../../../../images/sharks/squaliformes/etmopteridae/centroscyllium-ritteri.webp";

export const centroscylliumRitteri = {
    commonName: "Whitefin Dogfish",
    binomialName: "Centroscyllium ritteri",

    imageUrl: centroscylliumRitteriImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Etmopteridae",
    genus: "Centroscyllium",
    species: "ritteri",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "150-1100 m"
};