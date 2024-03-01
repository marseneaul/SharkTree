import { alopiasPelagicus } from "../species/lamniformes/alopias-pelagicus";
import { alopiasSuperciliosus } from "../species/lamniformes/alopias-superciliosus";
import { alopiasVulpinus } from "../species/lamniformes/alopias-vulpinus";
import { carchariasTaurus } from "../species/lamniformes/carcharias-taurus";
import { cetorhinusMaximus } from "../species/lamniformes/cetorhinus-maximus";
import { megachasmaPelagios } from "../species/lamniformes/megachasma-pelagios";
import { mitsukurinaOwstoni } from "../species/lamniformes/mitsukurina-owstoni";
import { odontaspisFerox } from "../species/lamniformes/odontaspis-ferox";
import { odontaspisNoronhai } from "../species/lamniformes/odontaspis-noronhai";
import { psuedocarchariasKamoharai } from "../species/lamniformes/pseudocarcharias-kamoharai";

import { lamnidaeConfig } from "./lamnidae.config";

export const lamniformesConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                alopiasPelagicus,
                                alopiasVulpinus
                            ]
                        },
                        {
                            children: [
                                {
                                    children: [
                                        alopiasSuperciliosus,
                                        {
                                            children: [
                                                odontaspisFerox,
                                                odontaspisNoronhai
                                            ]
                                        },
                                        psuedocarchariasKamoharai
                                    ]
                                },
                                megachasmaPelagios
                            ]
                        }
                    ]
                },
                {
                    children: [
                        {
                            children: [
                                carchariasTaurus,
                                cetorhinusMaximus
                            ]
                        },
                        lamnidaeConfig
                    ]
                }
            ]
        },
        mitsukurinaOwstoni
    ]
};