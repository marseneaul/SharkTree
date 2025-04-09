import { CONSERVATION_STATUS, NUM_DORSAL_FINS, NUM_GILLS, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const chlamydoselachusAnguineus = {
    commonName: "Frilled Shark",
    alternativeNames: ["Lizard Shark", "Scaffold Shark"],
    binomialName: "Chlamydoselachus anguineus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Hexanchiformes",
    family: "Chlamydoselachidae",
    genus: "Chlamydoselachus",
    species: "anguineus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NUM_GILLS.SIX, 
        NUM_DORSAL_FINS.ONE
    ]
};