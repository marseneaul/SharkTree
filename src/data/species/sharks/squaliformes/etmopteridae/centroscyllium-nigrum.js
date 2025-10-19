import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import centroscylliumNigrumImg from "./../../../../../images/sharks/squaliformes/etmopteridae/centroscyllium-nigrum.png";

export const centroscylliumNigrum = {
    commonName: "Combtooth Dogfish",
    binomialName: "Centroscyllium nigrum",

    imageUrl: centroscylliumNigrumImg,

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
    species: "nigrum",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "269-1143 m"
};