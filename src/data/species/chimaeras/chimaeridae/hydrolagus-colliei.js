import { CONSERVATION_STATUS, GROUP_BEHAVIOR, REPRODUCTIVE_STRATEGY, SNOUT_SHAPE } from "../../../../constants/enums";
import hydrolagusCollieiImg from "./../../../../images/chimaeras/chimaeridae/hydrolagus-colliei.png";
import photographyImg from "./../../../../images/photography/hydrolagus-colliei.jpg";
import photographyImg2 from "./../../../../images/photography/hydrolagus-colliei-2.jpg";
import photographyImg3 from "./../../../../images/photography/hydrolagus-colliei-3.jpg";

export const hydrolagusColliei = {
    commonName: "Spotted Ratfish",
    binomialName: "Chimaera colliei",

    imageUrls: [hydrolagusCollieiImg, photographyImg, photographyImg2, photographyImg3],

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