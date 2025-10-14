import { CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import heterodontusFrancisciImg from "./../../../../images/heterodontiformes/heterodontus-francisci.png";

export const heterodontusFrancisci = {
    commonName: "Horn Shark",
    alternativeNames: ["California Horn Shark"],
    binomialName: "Heterodontus francisci",

    imageUrl: heterodontusFrancisciImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Heterodontiformes",
    family: "Heterodontidae",
    genus: "Heterodontus",
    species: "francisci",

    tags: [
        CONSERVATION_STATUS.DD,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "2-152 m"
};