import { ANAL_FIN, BIOLUMINESCENT, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import etmopterusSchultziImg from "./../../../../../images/sharks/squaliformes/etmopteridae/etmopterus-schultzi.webp";

export const etmopterusSchultzi = {
    commonName: "Fringefin Lanternshark",
    binomialName: "Etmopterus schultzi",

    imageUrl: etmopterusSchultziImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Etmopteridae",
    genus: "Etmopterus",
    species: "schultzi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        BIOLUMINESCENT.YES
    ],
    depthRange: "220-915 m"
};