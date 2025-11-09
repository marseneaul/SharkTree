import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import chimaeraMonstrosaImg from "./../../../../images/chimaeras/chimaeridae/chimaera-monstrosa.webp";
export const chimaeraMonstrosa = {
    commonName: "Rabbit Fish",
    alternativeNames: ["Rat Fish"],
    binomialName: "Chimaera monstrosa",

    imageUrl: chimaeraMonstrosaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Chimaeridae",
    genus: "Chimaera",
    species: "monstrosa",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.SHORT,
    ],
    depthRange: "200-1663 m",
};