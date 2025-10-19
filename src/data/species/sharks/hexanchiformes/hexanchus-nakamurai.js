import { CONSERVATION_STATUS, NUM_DORSAL_FINS, NUM_GILLS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import hexanchusNakamuraiImg from "./../../../../images/sharks/hexanchiformes/hexanchus-nakamurai.png";

export const hexanchusNakamurai = {
    commonName: "Bigeye Sixgill Shark",
    binomialName: "Hexanchus nakamurai",

    imageUrl: hexanchusNakamuraiImg,

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
    species: "nakamurai",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NUM_GILLS.SIX, 
        NUM_DORSAL_FINS.ONE
    ],
    depthRange: "0-702 m"
};