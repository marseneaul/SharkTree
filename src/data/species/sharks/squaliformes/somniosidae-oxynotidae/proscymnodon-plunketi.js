import { ANAL_FIN, CONSERVATION_STATUS, DORSAL_FIN_SPINES, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import proscymnodonPlunketiImg from "./../../../../../images/sharks/squaliformes/somniosidae-oxynotidae/scymnodon-plunketi.webp";

export const proscymnodonPlunketi = {
    commonName: "Plunket Shark",
    alternativeNames: ["Plunket's Shark"],
    binomialName: "Scymnodon plunketi",

    imageUrl: proscymnodonPlunketiImg,

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
    species: "plunketi",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        DORSAL_FIN_SPINES.YES
    ],
    depthRange: "180-1550 m"
};