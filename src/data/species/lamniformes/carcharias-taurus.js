import { CAUDAL_FIN_SHAPE, CONSERVATION_STATUS, REPRODUCTIVE_STRATEGY } from "../../../constants/enums";

export const carchariasTaurus = {
    commonName: "Sand Tiger Shark",
    alternativeNames: ["Grey Nurse Shark", "Spotted Ragged-Tooth Shark", "Blue-Nurse Sand Tiger"],
    binomialName: "Carcharias taurus",

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Lamniformes",
    family: "Odontaspididae",
    genus: "Carcharias",
    species: "taurus",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.OVOVIVIPAROUS, REPRODUCTIVE_STRATEGY.EMBRYOPHAGY,
        CAUDAL_FIN_SHAPE.HOMOCERCAL
    ],
    depthRange: "0-232 m"
}