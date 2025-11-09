import { ANAL_FIN, BIOLUMINESCENT, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import etmopterusLuciferImg from "./../../../../../images/sharks/squaliformes/etmopteridae/etmopterus-lucifer.webp";

export const etmopterusLucifer = {
    commonName: "Blackbelly Lanternshark",
    alternativeNames: ["Lucifer Shark"],
    binomialName: "Etmopterus lucifer",

    imageUrl: etmopterusLuciferImg,

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
    species: "lucifer",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        BIOLUMINESCENT.YES
    ],
    depthRange: "158-1357 m"
};