import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import aulohalaelurusLabiosusImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-ii/aulohalaelurus-labiosus.webp";

export const aulohalaelurusLabiosus = {
    commonName: "Australian Blackspotted Catshark",
    binomialName: "Aulohalaelurus labiosus",

    imageUrl: aulohalaelurusLabiosusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Aulohalaelurus",
    species: "labiosus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-4 m"
};