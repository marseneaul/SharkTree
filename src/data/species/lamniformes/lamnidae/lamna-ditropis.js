import lamnaDitropisImg from "./../../../../images/lamna-ditropis.jpeg";
import { BEHAVIOR, CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY, TEMPERATURE_REGULATION, UNIQUE_FEATURE } from "../../../../constants/enums";

export const lamnaDitropis = {
    commonName: "Salmon Shark",
    binomialName: "Lamna ditropis",

    imageUrl: lamnaDitropisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Lamnidae",
    genus: "Lamna",
    species: "ditropis",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};