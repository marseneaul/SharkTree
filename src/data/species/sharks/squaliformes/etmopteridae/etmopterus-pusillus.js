import { ANAL_FIN, BIOLUMINESCENT, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import etmopterusPusillusImg from "./../../../../../images/sharks/squaliformes/etmopteridae/etmopterus-pusillus.png";

export const etmopterusPusillus = {
    commonName: "Smooth Lanternshark",
    alternativeNames: ["Slender Lanternshark"],
    binomialName: "Etmopterus pusillus",

    imageUrl: etmopterusPusillusImg,

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
    species: "pusillus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        BIOLUMINESCENT.YES
    ],
    depthRange: "0-1998 m"
};