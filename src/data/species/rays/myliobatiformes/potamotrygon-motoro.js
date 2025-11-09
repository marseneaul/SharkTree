import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../constants/enums";
import potamotrygonMotoroImg from "./../../../../images/rays/myliobatiformes/potamotrygon-motoro.webp";

export const potamotrygonMotoro = {
    commonName: "Ocellate River Stingray",
    alternativeNames: ["Peacock-Eye Stingray", "Black River Stingray"],
    binomialName: "Potamotrygon motoro",

    imageUrl: potamotrygonMotoroImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Potamotrygonidae",
    genus: "Potamotrygon",
    species: "motoro",

    tags: [
        CONSERVATION_STATUS.DD,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "?-? m",
};