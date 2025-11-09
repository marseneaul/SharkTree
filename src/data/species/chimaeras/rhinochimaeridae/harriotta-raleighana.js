import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import harriottaRaleighanaImg from "./../../../../images/chimaeras/rhinochimaeridae/harriotta-raleighana.webp";

export const harriottaRaleighana = {
    commonName: "Narrownose Chimaera",
    binomialName: "Harriotta raleighana",

    imageUrl: harriottaRaleighanaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Rhinochimaeridae",
    genus: "Harriotta",
    species: "raleighana",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.ELONGATED,
    ],
    depthRange: "350-2600 m",
};