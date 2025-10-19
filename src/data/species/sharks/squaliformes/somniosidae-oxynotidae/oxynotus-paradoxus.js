import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import oxynotusParadoxusImg from "./../../../../../images/sharks/squaliformes/somniosidae-oxynotidae/oxynotus-paradoxus.png";

export const oxynotusParadoxus = {
    commonName: "Sailfin Roughshark",
    binomialName: "Oxynotus paradoxus",

    imageUrl: oxynotusParadoxusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Oxynotidae",
    genus: "Oxynotus",
    species: "paradoxus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "265-1104 m"
};