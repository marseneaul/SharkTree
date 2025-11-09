import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../constants/enums";
import odontaspisNoronhaiImg from "./../../../../images/sharks/lamniformes/odontaspis-noronhai.webp";

export const odontaspisNoronhai = {
    commonName: "Bigeye Sand Tiger",
    binomialName: "Odontaspis noronhai",

    imageUrl: odontaspisNoronhaiImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Odontaspididae",
    genus: "Odontaspis",
    species: "noronhai",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "35-1000 m"
};