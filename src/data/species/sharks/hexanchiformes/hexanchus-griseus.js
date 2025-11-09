import { CONSERVATION_STATUS, NUM_DORSAL_FINS, NUM_GILLS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import hexanchusGriseusImg from "./../../../../images/sharks/hexanchiformes/hexanchus-griseus.webp";

export const hexanchusGriseus = {
    commonName: "Bluntnose Sixgill Shark",
    binomialName: "Hexanchus griseus",

    imageUrl: hexanchusGriseusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Hexanchiformes",
    family: "Hexanchidae",
    genus: "Hexanchus",
    species: "griseus",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NUM_GILLS.SIX, 
        NUM_DORSAL_FINS.ONE
    ],
    depthRange: "0-2490 m"
};