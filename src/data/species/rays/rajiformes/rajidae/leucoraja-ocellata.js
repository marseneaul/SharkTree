import { CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import leucorajaOcellataImg from "./../../../../../images/rays/rajiformes/rajidae/leucoraja-ocellata.png";

export const leucorajaOcellata = {
    commonName: "Winter Skate",
    alternativeNames: ["Spotted Skate"],
    binomialName: "Leucoraja ocellata",

    imageUrl: leucorajaOcellataImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Rajiformes",
    family: "Rajidae",
    genus: "Leucoraja",
    species: "ocellata",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
    ],
    depthRange: "5-725 m",
};