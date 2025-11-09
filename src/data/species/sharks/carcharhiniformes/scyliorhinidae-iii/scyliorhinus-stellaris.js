import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import scyliorhinusStellarisImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-iii/scyliorhinus-stellaris.webp";
import photographyImg from "./../../../../../images/photography/scyliorhinus-stellaris.webp";
import photographyImg2 from "./../../../../../images/photography/scyliorhinus-stellaris-2.webp";

export const scyliorhinusStellaris = {
    commonName: "Nursehound",
    alternativeNames: ["Large-Spotted Dogfish", "Greater Spotted Dogfish", "Bull Huss"],
    binomialName: "Scyliorhinus stellaris",

    imageUrls: [scyliorhinusStellarisImg, photographyImg, photographyImg2],

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