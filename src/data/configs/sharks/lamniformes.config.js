import { alopiasPelagicus } from "../../species/sharks/lamniformes/alopias-pelagicus";
import { alopiasSuperciliosus } from "../../species/sharks/lamniformes/alopias-superciliosus";
import { alopiasVulpinus } from "../../species/sharks/lamniformes/alopias-vulpinus";
import { carchariasTaurus } from "../../species/sharks/lamniformes/carcharias-taurus";
import { cetorhinusMaximus } from "../../species/sharks/lamniformes/cetorhinus-maximus";
import { megachasmaPelagios } from "../../species/sharks/lamniformes/megachasma-pelagios";
import { mitsukurinaOwstoni } from "../../species/sharks/lamniformes/mitsukurina-owstoni";
import { odontaspisFerox } from "../../species/sharks/lamniformes/odontaspis-ferox";
import { odontaspisNoronhai } from "../../species/sharks/lamniformes/odontaspis-noronhai";
import { psuedocarchariasKamoharai } from "../../species/sharks/lamniformes/pseudocarcharias-kamoharai";

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