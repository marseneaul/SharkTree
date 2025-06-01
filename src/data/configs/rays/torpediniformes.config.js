import { narcineEntemedor } from "../../species/rays/torpediniformes/narcine-entemedor";
import { narcineLasti } from "../../species/rays/torpediniformes/narcine-lasti";
import { narcineTasmaniensis } from "../../species/rays/torpediniformes/narcine-tasmaniensis";
import { narkeCapensis } from "../../species/rays/torpediniformes/narke-capensis";
import { torpedoFuscomaculata } from "../../species/rays/torpediniformes/torpedo-fuscomaculata";
import { torpedoMackayana } from "../../species/rays/torpediniformes/torpedo-mackayana";
import { torpedoMacneilli } from "../../species/rays/torpediniformes/torpedo-macneilli";
import { torpedoMarmorata } from "../../species/rays/torpediniformes/torpedo-marmorata";
import { torpedoNobiliana } from "../../species/rays/torpediniformes/torpedo-nobiliana";
import { torpedoSinuspersici } from "../../species/rays/torpediniformes/torpedo-sinuspersici";
import { torpedoTorpedo } from "../../species/rays/torpediniformes/torpedo-torpedo";
import { typhlonarkeAysoni } from "../../species/rays/torpediniformes/typhlonarke-aysoni";

export const torpediniformesConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        narcineEntemedor,
                        narkeCapensis

                    ]
                },
                {
                    children: [
                        {
                            children: [
                                torpedoNobiliana,
                                torpedoMacneilli
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
                                                        torpedoFuscomaculata,
                                                        torpedoTorpedo
                                                    ]
                                                },
                                                torpedoSinuspersici
                                            ]
                                        },
                                        torpedoMackayana
                                    ]
                                },
                                torpedoMarmorata
                            ]
                        }
                    ]
                }
            ]
        },
        {
            children: [
                {
                    children: [
                        narcineLasti,
                        narcineTasmaniensis
                    ]
                },
                typhlonarkeAysoni
            ]
        }
    ]
}