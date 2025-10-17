import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import hydrolagusAlbertiImg from "./../../../../images/chimaeras/chimaeridae/hydrolagus-alberti.png";

export const hydrolagusAlberti = {
    commonName: "Gulf Chimaera",
    binomialName: "Hydrolagus alberti",

    imageUrl: hydrolagusAlbertiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Chimaeridae",
    genus: "Hydrolagus",
    species: "alberti",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.SHORT,
    ],
    depthRange: "348-1100 m",
};