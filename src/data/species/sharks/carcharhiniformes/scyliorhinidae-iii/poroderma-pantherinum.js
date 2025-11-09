import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import porodermaPantherinumImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-iii/poroderma-pantherinum.webp";
import photographyImg from "./../../../../../images/photography/poroderma-pantherinum.webp";
import photographyImg2 from "./../../../../../images/photography/poroderma-pantherinum-2.webp";

export const porodermaPantherinum = {
    commonName: "Leopard Catshark",
    binomialName: "Poroderma pantherinum",

    imageUrls: [porodermaPantherinumImg, photographyImg, photographyImg2],


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