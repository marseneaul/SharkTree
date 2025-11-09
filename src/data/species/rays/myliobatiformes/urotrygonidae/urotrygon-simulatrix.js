import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../../constants/enums";
import urotrygonSimulatrixImg from "./../../../../../images/rays/myliobatiformes/urotrygonidae/urotrygon-simulatrix.webp";

export const urotrygonSimulatrix = {
    commonName: "Fake Round Ray",
    binomialName: "Urotrygon simulatrix",

    imageUrl: urotrygonSimulatrixImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Urotrygonidae",
    genus: "Urotrygon",
    species: "simulatrix",

    tags: [
        CONSERVATION_STATUS.VU,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "2-18 m",
};