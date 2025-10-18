import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import porodermaPantherinumImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-iii/poroderma-pantherinum.png";

export const porodermaPantherinum = {
    commonName: "Leopard Catshark",
    binomialName: "Poroderma pantherinum",

    imageUrl: porodermaPantherinumImg,


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
    species: "pantherinum",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-274 m"
};