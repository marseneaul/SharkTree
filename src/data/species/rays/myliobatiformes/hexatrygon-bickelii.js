import { NUM_DORSAL_FINS, NUM_GILLS, REPRODUCTIVE_STRATEGY, TAIL_SPINES } from "../../../../constants/enums";

export const hexatrygonBickelii = {
    commonName: "Sixgill Stingray",
    binomialName: "Hexatrygon bickelli",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Batomorphi",
    order: "Myliobatiformes",
    family: "Hexatrygonidae",
    genus: "Hexatrygon",
    species: "bickelli",

    tags: [
        NUM_DORSAL_FINS.ZERO,
        TAIL_SPINES.YES,
        NUM_GILLS.SIX,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS,
    ],
};