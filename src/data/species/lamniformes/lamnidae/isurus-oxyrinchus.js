import { CAUDAL_FIN_SHAPE, TEMPERATURE_REGULATION } from "../../../../constants/enums";
import isurusOxyrinchusImg from "./../../../../images/isurus-oxyrinchus.png";

export const isurusOxyrinchus = {
    commonName: "Shortfin Mako",
    alternativeNames: ["Shortfin Mako Shark", "Blue Pointer", "Bonito Shark", "Mako Shark"],
    binomialName: "Isurus oxyrinchus",

    imageUrl: isurusOxyrinchusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Lamnidae",
    genus: "Isurus",
    species: "oxyrinchus",

    tags: [
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};