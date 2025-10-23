import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY } from "../../../../../constants/enums";
import haploblepharusEdwardsiiImg from "./../../../../../images/sharks/carcharhiniformes/scyliorhinidae-i/haploblepharus-edwardsii.png";
import photographyImg from "./../../../../../images/photography/haploblepharus-edwardsii.jpg";
import photographyImg2 from "./../../../../../images/photography/haploblepharus-edwardsii-2.jpg";

export const haploblepharusEdwardsii = {
    commonName: "Puffadder Shyshark",
    alternativeNames: ["Shyshark", "Doughnut", "Happy Eddie"],
    binomialName: "Haploblepharus edwardsii",

    imageUrls: [haploblepharusEdwardsiiImg, photographyImg, photographyImg2],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Scyliorhinidae",
    genus: "Haploblepharus",
    species: "edwardsii",

    tags: [
        CONSERVATION_STATUS.EN,
        REPRODUCTIVE_STRATEGY.OVIPAROUS,
        NICTITATING_MEMBRANE.YES
    ],
    depthRange: "0-288 m"
}