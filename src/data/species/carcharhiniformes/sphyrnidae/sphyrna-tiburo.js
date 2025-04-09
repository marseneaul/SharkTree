import { CONSERVATION_STATUS, FEEDING_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../constants/enums";

export const sphyrnaTiburo = {
    commonName: "Bonnethead Shark",
    binomialName: "Sphyrna tiburo",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Sphyrnidae",
    genus: "Sphyrna",
    species: "tiburo",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS, REPRODUCTIVE_STRATEGY.PARTHENOGENESIS,
        NICTITATING_MEMBRANE.YES,
        FEEDING_BEHAVIOR.CARNIVOROUS, FEEDING_BEHAVIOR.OMNIVOROUS,
        SPIRACLES.NO
    ]
};