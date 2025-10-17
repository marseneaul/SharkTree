import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import urotrygonRogersiImg from "./../../../../../images/rays/myliobatiformes/urotrygonidae/urotrygon-rogersi.png";

export const urotrygonRogersi = {
    commonName: "Rogers' Round Ray",
    binomialName: "Urotrygon rogersi",

    imageUrl: urotrygonRogersiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urotrygonidae",
    genus: "Urotrygon",
    species: "rogersi",

    tags: [
        CONSERVATION_STATUS.NT,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "1-30 m",
};