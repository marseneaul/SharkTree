import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import sympterygiaAcutaImg from "./../../../../../images/rays/rajiformes/arhynchobatidae/sympterygia-acuta.png";

export const sympterygiaAcuta = {
    commonName: "Bignose Fanskate",
    binomialName: "Sympterygia acuta",

    imageUrl: sympterygiaAcutaImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Arhynchobatidae",
    genus: "Sympterygia",
    species: "acuta",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "0-188 m",
};