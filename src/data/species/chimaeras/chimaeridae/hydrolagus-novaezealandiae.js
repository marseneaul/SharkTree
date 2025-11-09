import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import hydrolagusNovaezealandiaeImg from "./../../../../images/chimaeras/chimaeridae/hydrolagus-novaezealandiae.webp";

export const hydrolagusNovaezealandiae = {
    commonName: "Dark Ghostshark",
    binomialName: "Hydrolagus novaezealandiae",

    imageUrl: hydrolagusNovaezealandiaeImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Chimaeridae",
    genus: "Hydrolagus",
    species: "novaezealandiae",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.SHORT,
    ],
    depthRange: "32-800 m",
};