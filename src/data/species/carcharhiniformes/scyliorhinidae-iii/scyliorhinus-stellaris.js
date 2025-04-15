import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";

export const scyliorhinusStellaris = {
    commonName: "Nursehound",
    alternativeNames: ["Large-Spotted Dogfish", "Greater Spotted Dogfish", "Bull Huss"],
    binomialName: "Scyliorhinus stellaris",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Scyliorhinus",
    species: "stellaris",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-380 m"
};