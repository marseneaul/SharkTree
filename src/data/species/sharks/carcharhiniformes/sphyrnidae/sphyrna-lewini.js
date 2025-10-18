import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import sphyrnaLewiniImg from "./../../../../../images/sharks/carcharhiniformes/sphyrnidae/sphyrna-lewini.png";

export const sphyrnaLewini = {
    commonName: "Scalloped Hammerhead Shark",
    binomialName: "Sphyrna lewini",

    imageUrl: sphyrnaLewiniImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Sphyrnidae",
    genus: "Sphyrna",
    species: "lewini",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-1043 m"
};