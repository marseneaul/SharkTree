import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";

export const hydrolagusAfricanus = {
    commonName: "African Chimaera",
    binomialName: "Hydrolagus africanus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Chimaeridae",
    genus: "Hydrolagus",
    species: "africanus",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.SHORT,
    ],
    depthRange: "300-1030 m",
};