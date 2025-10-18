import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import scoliodonMacrorhynchosImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/scoliodon-macrorhynchos.png";

export const scoliodonMacrorhynchos = {
    commonName: "Pacific Spadenose Shark",
    binomialName: "Scoliodon macrorhynchos",

    imageUrl: scoliodonMacrorhynchosImg,

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
    species: "macrorhynchos",

    tags: [
        CONSERVATION_STATUS.NT,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-50 m"
};