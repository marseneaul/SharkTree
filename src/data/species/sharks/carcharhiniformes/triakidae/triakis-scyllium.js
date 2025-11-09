import { CONSERVATION_STATUS, GROUP_BEHAVIOR, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import triakisScylliumImg from "./../../../../../images/sharks/carcharhiniformes/triakidae/triakis-scyllium.webp";
import photographyImg from "./../../../../../images/photography/triakis-scyllium.webp";
import photographyImg2 from "./../../../../../images/photography/triakis-scyllium-2.webp";
import photographyImg3 from "./../../../../../images/photography/triakis-scyllium-3.webp";

export const triakisScyllium = {
    commonName: "Banded Houndshark",
    binomialName: "Triakis scyllium",

    imageUrls: [triakisScylliumImg, photographyImg, photographyImg2, photographyImg3],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Triakidae",
    genus: "Triakis",
    species: "scyllium",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        GROUP_BEHAVIOR.SCHOOLING
    ],
    depthRange: "30-150 m"
};