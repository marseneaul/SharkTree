import { CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import heterodontusFrancisciImg from "./../../../../images/sharks/heterodontiformes/heterodontus-francisci.png";
import photographyImg from "./../../../../images/photography/heterodontus-francisci.jpg";
import photographyImg2 from "./../../../../images/photography/heterodontus-francisci-2.jpg";
import photographyImg3 from "./../../../../images/photography/heterodontus-francisci-3.jpg";

export const heterodontusFrancisci = {
    commonName: "Horn Shark",
    alternativeNames: ["California Horn Shark"],
    binomialName: "Heterodontus francisci",

    imageUrls: [heterodontusFrancisciImg, photographyImg, photographyImg2, photographyImg3],

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