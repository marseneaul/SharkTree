import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import mustelusSchmittiImg from "./../../../../../images/sharks/carcharhiniformes/triakidae/mustelus-schmitti.webp";

export const mustelusSchmitti = {
    commonName: "Narrownose Smooth-Hound",
    binomialName: "Mustelus schmitti",

    imageUrl: mustelusSchmittiImg,

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
    species: "schmitti",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "2-195 m"
};