import { CONSERVATION_STATUS, NUM_DORSAL_FINS, REPRODUCTIVE_STRATEGY, TAIL_SPINES, VENOMOUS_SPINE } from "../../../../constants/enums";

export const himanturaSchmardae = {
    commonName: "Chupare Stingray",
    alternativeNames: ["Caribbean Whiptail Stingray"],
    binomialName: "Styracura schmardae",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Potamotrygonidae",
    genus: "Styracura",
    species: "schmardae",

    tags: [
        CONSERVATION_STATUS.EN,
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        VENOMOUS_SPINE.YES,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
    depthRange: "0-50 m",
};