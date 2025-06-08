import { CONSERVATION_STATUS, GROUP_BEHAVIOR, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";

export const hydrolagusColliei = {
    commonName: "Spotted Ratfish",
    binomialName: "Chimaera colliei",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Chimaeridae",
    genus: "Chimaera",
    species: "colliei",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        GROUP_BEHAVIOR.SCHOOLING,
        SNOUT_SHAPE.SHORT,
    ],
    depthRange: "0-1463 m",
};