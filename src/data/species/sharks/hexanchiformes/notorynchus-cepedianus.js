import { CONSERVATION_STATUS, NUM_DORSAL_FINS, NUM_GILLS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import notorhynchusCepedianusImg from "./../../../../images/sharks/hexanchiformes/notorynchus-cepedianus.webp";

export const notorhynchusCepedianus = {
    commonName: "Broadnose Sevengill Shark",
    binomialName: "Notorynchus cepedianus",

    imageUrl: notorhynchusCepedianusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Hexanchiformes",
    family: "Hexanchidae",
    genus: "Notorynchus",
    species: "cepedianus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NUM_GILLS.SEVEN, 
        NUM_DORSAL_FINS.ONE
    ],
    depthRange: "0-570 m"
};