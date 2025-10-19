import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import oxynotusBruniensisImg from "./../../../../../images/sharks/squaliformes/somniosidae-oxynotidae/oxynotus-bruniensis.png";

export const oxynotusBruniensis = {
    commonName: "Prickly Dogfish",
    binomialName: "Oxynotus bruniensis",

    imageUrl: oxynotusBruniensisImg,

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
    species: "bruniensis",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "45-1120 m"
};