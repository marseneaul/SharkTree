import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import cephaloscylliumUmbratileImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-iii/cephaloscyllium-umbratile.png";

export const cephaloscylliumUmbratile = {
    commonName: "Blotchy Catshark",
    alternativeNames: ["Japanese Swellshark", "Blotchy Swellshark"],
    binomialName: "Cephaloscyllium umbratile",

    imageUrl: cephaloscylliumUmbratileImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Cephaloscyllium",
    species: "umbratile",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "18-790 m"
};