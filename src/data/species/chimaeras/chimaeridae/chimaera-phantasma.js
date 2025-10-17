import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import chimaeraPhantasmaImg from "./../../../../images/chimaeras/chimaeridae/chimaera-phantasma.png";

export const chimaeraPhantasma = {
    commonName: "Silver Chimaera",
    binomialName: "Chimaera phantasma",

    imageUrl: chimaeraPhantasmaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Chimaeridae",
    genus: "Chimaera",
    species: "phantasma",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.SHORT,
    ],
    depthRange: "20-962 m",
};