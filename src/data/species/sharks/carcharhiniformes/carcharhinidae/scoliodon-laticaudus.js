import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import scoliodonLaticaudusImg from "./../../../../../images/carcharhiniformes/carcharhinidae/scoliodon-laticaudus.png";

export const scoliodonLaticaudus = {
    commonName: "Spadenose Shark",
    alternativeNames: ["Indian Dogfish", "Sharp-Nosed Shark", "Trowel-Nose Shark", "Yellow Dog Shark"],
    binomialName: "Scoliodon laticaudus",

    imageUrl: scoliodonLaticaudusImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Scoliodon",
    species: "laticaudus",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "10-75 m"
};