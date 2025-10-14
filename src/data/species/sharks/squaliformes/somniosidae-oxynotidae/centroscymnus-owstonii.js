import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import centroscymnusOwstoniiImg from "./../../../../../images/squaliformes/somniosidae-oxynotidae/centroscymnus-owstonii.png";

export const centroscymnusOwstonii = {
    commonName: "Roughskin Dogfish",
    binomialName: "Centroscymnus owstonii",

    imageUrl: centroscymnusOwstoniiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Somniosidae",
    genus: "Centroscyllium",
    species: "owstonii",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "150-1459 m"
};