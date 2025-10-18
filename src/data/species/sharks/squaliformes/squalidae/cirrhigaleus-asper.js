import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import cirrhigaleusAsperImg from "./../../../../../images/sharks/squaliformes/squalidae/cirrhigaleus-asper.png";

export const cirrhigaleusAsper = {
    commonName: "Roughskin Spurdog",
    alternativeNames: ["Roughskin Dogfish", "Roughskin Dogshark", "Roughskin Spiny Dogfish"],
    binomialName: "Cirrhigaleus asper",

    imageUrl: cirrhigaleusAsperImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Squalidae",
    genus: "Cirrhigaleus",
    species: "asper",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "73-600 m"
};