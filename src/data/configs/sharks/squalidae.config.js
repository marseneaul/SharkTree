import { cirrhigaleusAsper } from "../../species/sharks/squaliformes/squalidae/cirrhigaleus-asper";
import { cirrhigaleusAustralis } from "../../species/sharks/squaliformes/squalidae/cirrhigaleus-australis";
import { squalusAcanthias } from "../../species/sharks/squaliformes/squalidae/squalus-acanthias";
import { squalusAlbifrons } from "../../species/sharks/squaliformes/squalidae/squalus-albifrons";
import { squalusBrevirostris } from "../../species/sharks/squaliformes/squalidae/squalus-brevirostris";
import { squalusChloroculus } from "../../species/sharks/squaliformes/squalidae/squalus-chloroculus";
import { squalusCrassispinus } from "../../species/sharks/squaliformes/squalidae/squalus-crassispinus";
import { squalusCubensis } from "../../species/sharks/squaliformes/squalidae/squalus-cubensis";
import { squalusEdmundsi } from "../../species/sharks/squaliformes/squalidae/squalus-edmundsi";
import { squalusGrahami } from "../../species/sharks/squaliformes/squalidae/squalus-grahami";
import { squalusJaponicus } from "../../species/sharks/squaliformes/squalidae/squalus-japonicus";
import { squalusMegalops } from "../../species/sharks/squaliformes/squalidae/squalus-megalops";
import { squalusMitsukurii } from "../../species/sharks/squaliformes/squalidae/squalus-mitsukurii";
import { squalusMontalbani } from "../../species/sharks/squaliformes/squalidae/squalus-montalbani";
import { squalusNasutus } from "../../species/sharks/squaliformes/squalidae/squalus-nasutus";
import { squalusSuckleyi } from "../../species/sharks/squaliformes/squalidae/squalus-suckleyi";

export const squalidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        cirrhigaleusAsper,
                        cirrhigaleusAustralis 
                    ]
                },
                {
                    children: [
                        squalusAcanthias,
                        squalusSuckleyi
                    ]
                }
            ]
        },
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                squalusAlbifrons,
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                squalusMitsukurii,
                                                                squalusCubensis
                                                            ]
                                                        },
                                                        squalusChloroculus,
                                                        squalusMontalbani
                                                    ]
                                                },
                                                squalusGrahami
                                            ]
                                        },
                                        squalusEdmundsi
                                    ]
                                }
                            ]
                        },
                        {
                            children: [
                                squalusJaponicus,
                                squalusNasutus
                            ]
                        }
                    ]
                },
                squalusCrassispinus 
            ]
        },
        {
            children: [
                squalusBrevirostris,
                squalusMegalops
            ]
        }
    ]
}
