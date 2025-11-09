import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import euprotomicrusBispinatusImg from "./../../../../../images/sharks/squaliformes/dalatiidae/euprotomicrus-bispinatus.webp";

export const euprotomicrusBispinatus = {
    commonName: "Pygmy Shark",
    binomialName: "Euprotomicrus bispinatus",

    imageUrl: euprotomicrusBispinatusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Dalatiidae",
    genus: "Euprotomicrus",
    species: "bispinatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "0-1500 m"
};