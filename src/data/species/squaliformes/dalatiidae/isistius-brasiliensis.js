import { ANAL_FIN, BIOLUMINESCENT, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const isistiusBrasiliensis = {
    commonName: "Cookiecutter Shark",
    alternativeNames: ["Cigar Shark", "Demon Whale-Biters", "Luminous Shark", "Smalltooth Cookiecutter Shark", "Smooth Cookiecutter Shark"],
    binomialName: "Isistius brasiliensis",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Dalatiidae",
    genus: "Isistius",
    species: "brasiliensis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        BIOLUMINESCENT.YES
    ],
    depthRange: "0-3500 m"
};