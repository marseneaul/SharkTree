import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import sphyrnaCoronaImg from "./../../../../../images/sharks/carcharhiniformes/sphyrnidae/sphyrna-corona.png";

export const sphyrnaCorona = {
    commonName: "Scalloped Bonnethead",
    binomialName: "Sphyrna corona",

    imageUrl: sphyrnaCoronaImg,

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
    species: "corona",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-100 m"
};