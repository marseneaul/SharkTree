import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import schroederichthysBiviusImg from "./../../../../../images/carcharhiniformes/scyliorhinidae-ii/schroederichthys-bivius.png";

export const schroederichthysBivius = {
    commonName: "Narrowmouthed Catshark",
    binomialName: "Schroederichthys bivius",

    imageUrl: schroederichthysBiviusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Schroederichthys",
    species: "bivius",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "12-359 m"
};