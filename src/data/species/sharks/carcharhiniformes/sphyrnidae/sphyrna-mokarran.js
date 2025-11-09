import { CONSERVATION_STATUS, NICTITATING_MEMBRANE, REPRODUCTIVE_STRATEGY, SPIRACLES } from "../../../../../constants/enums";
import sphyrnaMokarranImg from "./../../../../../images/sharks/carcharhiniformes/sphyrnidae/sphyrna-mokarran.webp";
import photographyImg from "./../../../../../images/photography/sphyrna-mokarran.webp";
import photographyImg2 from "./../../../../../images/photography/sphyrna-mokarran-2.webp";
import photographyImg3 from "./../../../../../images/photography/sphyrna-mokarran-3.webp";

export const sphyrnaMokarran = {
    commonName: "Great Hammerhead Shark",
    binomialName: "Sphyrna mokarran",

    imageUrls: [sphyrnaMokarranImg, photographyImg, photographyImg2, photographyImg3],

    domain:	"Eukaryota",
    kingdom: "Animalia",
    phylum:	"Chordata",
    class: "Chondrichthyes",
    subclass: "Elasmobranchii",
    subdivision: "Selachimorpha",
    superorder: "Galeomorphii",
    order: "Carcharhiniformes",
    family: "Sphyrnidae",
    genus: "Sphyrna",
    species: "mokarran",

    tags: [
        CONSERVATION_STATUS.CR,
        REPRODUCTIVE_STRATEGY.VIVIPAROUS,
        NICTITATING_MEMBRANE.YES,
        SPIRACLES.NO
    ],
    depthRange: "0-300 m"
};