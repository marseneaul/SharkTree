import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import mustelusNorrisiImg from "./../../../../../images/carcharhiniformes/triakidae/mustelus-norrisi.png";

export const mustelusNorrisi = {
    commonName: "Narrowfin Smooth-Hound",
    alternativeNames: ["Florida Smooth-Hound"],
    binomialName: "Mustelus norrisi",

    imageUrl: mustelusNorrisiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Triakidae",
    genus: "Mustelus",
    species: "norrisi",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "0-260 m"
};