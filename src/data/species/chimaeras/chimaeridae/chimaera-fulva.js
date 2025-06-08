import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";

export const chimaeraFulva = {
    commonName: "Southern Chimaera",
    binomialName: "Chimaera fulva",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Chimaeridae",
    genus: "Chimaera",
    species: "fulva",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.SHORT,
    ],
    depthRange: "798-1095 m",
};