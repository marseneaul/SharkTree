import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import centroscymnusCoelolepisImg from "./../../../../../images/sharks/squaliformes/somniosidae-oxynotidae/centroscymnus-coelolepis.png";

export const centroscymnusCoelolepis = {
    commonName: "Portuguese Dogfish",
    binomialName: "Centroscymnus coelolepis",

    imageUrl: centroscymnusCoelolepisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Somniosidae",
    genus: "Centroscymnus",
    species: "coelolepis",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "128-3675 m"
};