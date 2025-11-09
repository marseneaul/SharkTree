import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import mustelusLunulatusImg from "./../../../../../images/sharks/carcharhiniformes/triakidae/mustelus-lunulatus.webp";

export const mustelusLunulatus = {
    commonName: "Sicklefin Smooth-Hound",
    binomialName: "Mustelus lunulatus",

    imageUrl: mustelusLunulatusImg,

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
    species: "lunulatus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "9-144 m"
};