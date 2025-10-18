import { ANAL_FIN, BIOLUMINESCENT, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import etmopterusUnicolorImg from "./../../../../../images/sharks/squaliformes/etmopteridae/etmopterus-unicolor.png";

export const etmopterusUnicolor = {
    commonName: "Brown Lanternshark",
    alternativeNames: ["Bristled Lanternshark"],
    binomialName: "Etmopterus unicolor",

    imageUrl: etmopterusUnicolorImg,

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
    species: "unicolor",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        BIOLUMINESCENT.YES
    ],
    depthRange: "120-1500 m"
};