import alopiasVulpinusImg from "./../../../images/alopias-vulpinus.jpeg";
import { BEHAVIOR, CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION } from "../../../constants/enums";

export const alopiasVulpinus = {
    commonName: "Common Thresher",
    alternativeNames: ["Atlantic Thresher"],
    binomialName: "Alopias vulpinus",

    imageUrl: alopiasVulpinusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Alopiidae",
    genus: "Alopias",
    species: "vulpinus",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.OOPHAGY,
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        BEHAVIOR.BREACHING,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};