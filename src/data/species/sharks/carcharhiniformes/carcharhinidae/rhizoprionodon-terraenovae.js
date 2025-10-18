import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import rhizoprionodonTerraenovaeImg from "./../../../../../images/sharks/carcharhiniformes/carcharhinidae/rhizoprionodon-terraenovae.png";

export const rhizoprionodonTerraenovae = {
    commonName: "Atlantic Sharpnose Shark",
    binomialName: "Rhizoprionodon terraenovae",

    imageUrl: rhizoprionodonTerraenovaeImg,

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Carcharhinidae",
    genus: "Rhizoprionodon",
    species: "terraenovae",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-280 m"
};