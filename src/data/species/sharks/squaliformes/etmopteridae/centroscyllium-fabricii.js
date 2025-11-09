import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import centroscylliumFabriciiImg from "./../../../../../images/sharks/squaliformes/etmopteridae/centroscyllium-fabricii.webp";

export const centroscylliumFabricii = {
    commonName: "Black Dogfish",
    binomialName: "Centroscyllium fabricii",

    imageUrl: centroscylliumFabriciiImg,

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
    species: "fabricii",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "180-2250 m"
};