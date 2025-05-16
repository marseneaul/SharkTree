import { narcineEntemedor } from "../species/torpediniformes/narcine-entemedor";
import { narcineLasti } from "../species/torpediniformes/narcine-lasti";
import { narcineTasmaniensis } from "../species/torpediniformes/narcine-tasmaniensis";
import { narkeCapensis } from "../species/torpediniformes/narke-capensis";
import { torpedoFuscomaculata } from "../species/torpediniformes/torpedo-fuscomaculata";
import { torpedoMackayana } from "../species/torpediniformes/torpedo-mackayana";
import { torpedoMacneilli } from "../species/torpediniformes/torpedo-macneilli";
import { torpedoMarmorata } from "../species/torpediniformes/torpedo-marmorata";
import { torpedoNobiliana } from "../species/torpediniformes/torpedo-nobiliana";
import { torpedoSinuspersici } from "../species/torpediniformes/torpedo-sinuspersici";
import { torpedoTorpedo } from "../species/torpediniformes/torpedo-torpedo";
import { typhlonarkeAysoni } from "../species/torpediniformes/typhlonarke-aysoni";

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