import { CONSERVATION_STATUS, ELECTRIC_ORGAN, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import narcineTasmaniensisImg from "./../../../../images/rays/torpediniformes/narcine-tasmaniensis.png";

export const narcineTasmaniensis = {
    commonName: "Tasmanian Numbfish",
    binomialName: "Narcine tasmaniensis",

    imageUrl: narcineTasmaniensisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Torpediniformes",
    family: "Narcinidae",
    genus: "Narcine",
    species: "tasmaniensis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        ELECTRIC_ORGAN.YES,
    ],
    depthRange: "0-640 m",
};