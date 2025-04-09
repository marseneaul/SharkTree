import { CAUDAL_FIN_SHAPE, TEMPERATURE_REGULATION } from "../../../../constants/enums";
import isurusPaucusImg from "./../../../../images/isurus-paucus.png";

export const isurusPaucus = {
    commonName: "Longfin Mako Shark",
    binomialName: "Isurus paucus",

    imageUrl: isurusPaucusImg,

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
    species: "paucus",

    tags: [
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};