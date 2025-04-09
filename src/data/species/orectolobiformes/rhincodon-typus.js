import { FEEDING_BEHAVIOR, MOUTH_IN_FRONT_OF_EYES } from "../../../constants/enums";

export const rhincodonTypus = {
    commonName: "Whale Shark",
    binomialName: "Rhincodon typus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Orectolobiformes",
    family: "Rhincodontidae",
    genus: "Rhincodon",
    species: "typus",

    tags: [
        FEEDING_BEHAVIOR.CARNIVOROUS, FEEDING_BEHAVIOR.PLANKTIVOROUS,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES
    ]
};