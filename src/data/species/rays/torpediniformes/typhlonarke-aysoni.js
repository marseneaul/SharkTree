import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import typhlonarkeAysoniImg from "./../../../../images/rays/torpediniformes/typhlonarke-aysoni.webp";

export const typhlonarkeAysoni = {
    commonName: "Blind Electric Ray",
    binomialName: "Typhlonarke aysoni",

    imageUrl: typhlonarkeAysoniImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Narkidae",
    genus: "Typhlonarke",
    species: "aysoni",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "50-800 m",
};