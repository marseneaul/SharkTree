import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import zearajaChilensisImg from "./../../../../../images/rays/rajiformes/rajidae/zearaja-chilensis.png";

export const zearajaChilensis = {
    commonName: "Yellownose Skate",
    binomialName: "Zearaja chilensis",

    imageUrl: zearajaChilensisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Zearaja",
    species: "chilensis",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "14-600 m",
};