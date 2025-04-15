import { ANAL_FIN, BIOLUMINESCENT, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const etmopterusSplendidus = {
    commonName: "Splendid Lanternshark",
    binomialName: "Etmopterus splendidus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Squaliformes",
    family: "Etmopteridae",
    genus: "Etmopterus",
    species: "splendidus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ANAL_FIN.NO,
        BIOLUMINESCENT.YES
    ],
    depthRange: "100-300 m"
};