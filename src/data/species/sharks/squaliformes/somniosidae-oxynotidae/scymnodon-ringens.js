import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import scymnodonRingensImg from "./../../../../../images/sharks/squaliformes/somniosidae-oxynotidae/scymnodon-ringens.png";

export const scymnodonRingens = {
    commonName: "Knifetooth Dogfish",
    binomialName: "Scymnodon ringens",

    imageUrl: scymnodonRingensImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Somniosidae",
    genus: "Scymnodon",
    species: "ringens",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "200-1600 m"
};