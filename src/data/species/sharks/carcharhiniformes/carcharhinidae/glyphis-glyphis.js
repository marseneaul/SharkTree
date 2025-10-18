import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import glyphisGlyphisImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/glyphis-glyphis.png";

export const glyphisGlyphis = {
    commonName: "Speartooth Shark",
    alternativeNames: ["Bizant River Shark", "Queensland River Shark"],
    binomialName: "Glyphis glyphis",

    imageUrl: glyphisGlyphisImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Glyphis",
    species: "glyphis",

    tags: [
        CONSERVATION_STATUS.VU,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-23 m"
};