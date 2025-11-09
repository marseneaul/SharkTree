import { CONSERVATION_STATUS, FLATTENED_BODY, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import rhynchobatusPalpebratusImg from "./../../../../images/rays/rhinopristiformes/rhynchobatus-palpebratus.webp";

export const rhynchobatusPalpebratus = {
    commonName: "Eyebrow Wedgefish",
    binomialName: "Rhynchobatus palpebratus",

    imageUrl: rhynchobatusPalpebratusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Rhinidae",
    genus: "Rhynchobatus",
    species: "palpebratus",

    tags: [
        CONSERVATION_STATUS.NT,
        FLATTENED_BODY.NO,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "5-60 m",
};