import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import neoharriottaPinnataImg from "./../../../../images/chimaeras/rhinochimaeridae/neoharriotta-pinnata.webp";

export const neoharriottaPinnata = {
    commonName: "Sicklefin Chimaera",
    binomialName: "Neoharriotta pinnata",

    imageUrl: neoharriottaPinnataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Holocephali",
    order: "Chimaeriformes",
    family: "Rhinochimaeridae",
    genus: "Neoharriotta",
    species: "pinnata",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        SNOUT_SHAPE.ELONGATED,
    ],
    depthRange: "200-760 m",
};