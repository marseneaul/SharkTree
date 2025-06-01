import { proscylliumHaberei } from "../../species/sharks/carcharhiniformes/proscyllium-haberei";
import { galeocerdoCuvier } from "../../species/sharks/carcharhiniformes/galeocerdo-cuvier";
import { leptochariasSmithii } from "../../species/sharks/carcharhiniformes/leptocharias-smithii";
import { iagoGarricki } from "../../species/sharks/carcharhiniformes/iago-garricki";
import { iagoOmanensis } from "../../species/sharks/carcharhiniformes/iago-omanensis";
import { pseudotriakisMicrodon } from "../../species/sharks/carcharhiniformes/pseudotriakis-microdon";
import { gollumAttenuatus } from "../../species/sharks/carcharhiniformes/gollum-attenuatus";

import { sphyrnidaeConfig } from "./sphyrnidae.config";
import { carcharhinidaeConfig } from "./carcharhinidae.config";
import { hemigaleidaeConfig } from "./hemigaleidae.config";
import { triakidaeConfig } from "./triakidae.config";
import { scyliorhinidaeIConfig } from "./scyliorhinidae.i.config";
import { scyliorhinidaeIIConfig } from "./scyliorhinidae.ii.config";
import { scyliorhinidaeIIIConfig } from "./scyliorhinidae.iii.config";

export const carcharhiniformesConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                scyliorhinidaeIConfig,
                                proscylliumHaberei
                            ]
                        },
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                carcharhinidaeConfig,
                                                                sphyrnidaeConfig
                                                            ]
                                                        },
                                                        galeocerdoCuvier
                                                    ]
                                                },
                                                hemigaleidaeConfig
                                            ]
                                        },
                                        leptochariasSmithii
                                    ]
                                },
                                triakidaeConfig,
                                {
                                    children: [
                                        iagoOmanensis,
                                        iagoGarricki
                                    ]
                                }
                            ]
                        },
                        {
                            children: [
                                gollumAttenuatus,
                                pseudotriakisMicrodon
                            ]
                        }
                    ]
                },
                scyliorhinidaeIIConfig        
            ]
        },
        scyliorhinidaeIIIConfig
    ]
}