import { ANAL_FIN, BIOLUMINESCENT, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import etmopterusSentosusImg from "./../../../../../images/sharks/squaliformes/etmopteridae/etmopterus-sentosus.webp";

export const etmopterusSentosus = {
    commonName: "Thorny Lanternshark",
    binomialName: "Etmopterus sentosus",

    imageUrl: etmopterusSentosusImg,

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
    species: "sentosus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        BIOLUMINESCENT.YES
    ],
    depthRange: "200-500 m"
};