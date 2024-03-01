import { cirrhigaleusAsper } from "../species/squaliformes/squalidae/cirrhigaleus-asper";
import { cirrhigaleusAustralis } from "../species/squaliformes/squalidae/cirrhigaleus-australis";
import { squalusAcanthias } from "../species/squaliformes/squalidae/squalus-acanthias";
import { squalusAlbifrons } from "../species/squaliformes/squalidae/squalus-albifrons";
import { squalusBrevirostris } from "../species/squaliformes/squalidae/squalus-brevirostris";
import { squalusChloroculus } from "../species/squaliformes/squalidae/squalus-chloroculus";
import { squalusCrassispinus } from "../species/squaliformes/squalidae/squalus-crassispinus";
import { squalusCubensis } from "../species/squaliformes/squalidae/squalus-cubensis";
import { squalusEdmundsi } from "../species/squaliformes/squalidae/squalus-edmundsi";
import { squalusGrahami } from "../species/squaliformes/squalidae/squalus-grahami";
import { squalusJaponicus } from "../species/squaliformes/squalidae/squalus-japonicus";
import { squalusMegalops } from "../species/squaliformes/squalidae/squalus-megalops";
import { squalusMitsukurii } from "../species/squaliformes/squalidae/squalus-mitsukurii";
import { squalusMontalbani } from "../species/squaliformes/squalidae/squalus-montalbani";
import { squalusNasutus } from "../species/squaliformes/squalidae/squalus-nasutus";
import { squalusSuckleyi } from "../species/squaliformes/squalidae/squalus-suckleyi";

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
