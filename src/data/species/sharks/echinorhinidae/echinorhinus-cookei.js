import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import echinorhinusCookeiImg from "./../../../../images/sharks/echinorhinidae/echinorhinus-cookei.png";

export const echinorhinusCookei = {
    commonName: "Prickly Shark",
    binomialName: "Echinorhinus cookei",

    imageUrl: echinorhinusCookeiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Echinorhinidae",
    genus: "Echinorhinus",
    species: "cookei",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "4-1100 m"
};