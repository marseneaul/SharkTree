import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import mustelusWidodoiImg from "./../../../../../images/sharks/carcharhiniformes/triakidae/mustelus-widodoi.webp";

export const mustelusWidodoi = {
    commonName: "White-Fin Smooth-Hound",
    binomialName: "Mustelus widodoi",

    imageUrl: mustelusWidodoiImg,

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
    species: "widodoi",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "60-120 m"
};