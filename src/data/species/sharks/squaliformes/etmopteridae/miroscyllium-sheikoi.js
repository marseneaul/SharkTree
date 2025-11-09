import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import miroscylliumSheikoiImg from "./../../../../../images/sharks/squaliformes/etmopteridae/etmopterus-sheikoi.webp";

export const miroscylliumSheikoi = {
    commonName: "Rasptooth Dogfish",
    binomialName: "Etmopterus sheikoi",

    imageUrl: miroscylliumSheikoiImg,

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
    species: "sheikoi",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "340-370 m"
};