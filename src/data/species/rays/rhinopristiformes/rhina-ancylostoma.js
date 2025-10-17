import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import rhinaAncylostomaImg from "./../../../../images/rays/rhinopristiformes/rhina-ancylostoma.png";

export const rhinaAncylostoma = {
    commonName: "Bowmouth Guitarfish",
    alternativeNames: ["Shark Ray", "Mud Skate"],
    binomialName: "Rhina ancylostoma",

    imageUrl: rhinaAncylostomaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rhinopristiformes",
    family: "Rhinidae",
    genus: "Rhina",
    species: "ancylostoma",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-70 m",
};