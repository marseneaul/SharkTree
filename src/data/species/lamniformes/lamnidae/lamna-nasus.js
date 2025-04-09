import { CAUDAL_FIN_SHAPE, TEMPERATURE_REGULATION } from "../../../../constants/enums";
import lamnaNasusImg from "./../../../../images/lamna-nasus.jpeg";

export const lamnaNasus = {
    commonName: "Porbeagle",
    alternativeNames: ["Porbeagle Shark"],
    binomialName: "Lamna nasus",
    
    imageUrl: lamnaNasusImg,

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
    species: "nasus",

    tags: [
        TEMPERATURE_REGULATION.ENDOTHERMIC,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ]
};