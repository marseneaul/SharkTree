import { ANAL_FIN, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import trigonognathusKabeyaiImg from "./../../../../../images/sharks/squaliformes/etmopteridae/trigonognathus-kabeyai.png";

export const trigonognathusKabeyai = {
    commonName: "Viper Dogfish",
    alternativeNames: ["Viper Shark"],
    binomialName: "Trigonognathus kabeyai",

    imageUrl: trigonognathusKabeyaiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Etmopteridae",
    genus: "Trigonognathus",
    species: "kabeyai",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO
    ],
    depthRange: "250-1000 m"
};