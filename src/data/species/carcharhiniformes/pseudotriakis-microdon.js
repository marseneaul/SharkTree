import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const pseudotriakisMicrodon = {
    commonName: "False Catshark",
    alternativeNames: ["Sofa Shark"],
    binomialName: "Pseudotriakis microdon",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Pseudotriakidae",
    genus: "Pseudotriakis",
    species: "microdon",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        NICTITATING_MEMBRANE.YES
    ]
};