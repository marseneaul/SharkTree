import { ANAL_FIN, CONSERVATION_STATUS, NUM_GILLS, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const pliotremaWarreni = {
    commonName: "Sixgill Sawshark",
    binomialName: "Pliotrema warreni",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Squalomorphii",
    order: "Pristiophoriformes",
    family: "Pristiophoridae",
    genus: "Pliotrema",
    species: "warreni",

    tags: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
        NUM_GILLS.SIX,
        ANAL_FIN.NO
    ]
};