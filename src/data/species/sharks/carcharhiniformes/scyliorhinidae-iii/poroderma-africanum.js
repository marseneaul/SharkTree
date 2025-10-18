import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import porodermaAfricanumImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-iii/poroderma-africanum.png";

export const porodermaAfricanum = {
    commonName: "Pyjama Shark",
    alternativeNames: ["Striped Catshark"],
    binomialName: "Poroderma africanum",

    imageUrl: porodermaAfricanumImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Poroderma",
    species: "africanum",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-108 m"
};