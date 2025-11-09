import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import rhinochimaeraPacificaImg from "./../../../../images/chimaeras/rhinochimaeridae/rhinochimaera-pacifica.webp";

export const rhinochimaeraPacifica = {
    commonName: "Pacific Spookfish",
    alternativeNames: ["Knifenose Chimaera", "Narrownose Chimaera", "Pacific Long-Nosed Chimaera", "Pinocchiofish"],
    binomialName: "Rhinochimaera pacifica",

    imageUrl: rhinochimaeraPacificaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Rhinochimaeridae",
    genus: "Rhinochimaera",
    species: "pacifica",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.ELONGATED,        
    ],
    depthRange: "191-1290 m",
};