import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, VENOMOUS_SPINE } from "../../../../constants/enums";
import platyrhinoidisTriseriataImg from "./../../../../images/rays/platyrhinidae/platyrhinoidis-triseriata.png";

export const platyrhinoidisTriseriata = {
    commonName: "Thornback Guitarfish",
    binomialName: "Platyrhinoidis triseriata",

    imageUrl: platyrhinoidisTriseriataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Platyrhinidae",
    genus: "Platyrhinoidis",
    species: "triseriata",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        VENOMOUS_SPINE.NO,
    ],
    depthRange: "6-137 m",
};