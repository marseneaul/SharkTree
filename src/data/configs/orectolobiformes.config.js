import { brachaelurusColcloughi } from "../species/orectolobiformes/brachaelurus-colcloughi";
import { brachaelurusWaddi } from "../species/orectolobiformes/brachaelurus-waddi";
import { ginglymostomaCirratum } from "../species/orectolobiformes/ginglymostoma-cirratum";
import { pseudoginglymostomaBrevicaudatum } from "../species/orectolobiformes/pseudoginglymostoma-brevicaudatum";
import { nebriusFerrugineus } from "../species/orectolobiformes/nebrius-ferrugineus";
import { stegostomaFasciatum } from "../species/orectolobiformes/stegostoma-fasciatum";
import { rhincodonTypus } from "../species/orectolobiformes/rhincodon-typus";
import { parascylliumCollare } from "../species/orectolobiformes/parascyllium-collare";

import { orectolobidaeConfig } from "./orectolobidae.config";
import { hemiscylliidaeConfig } from "./hemiscylliidae.config";

export const orectolobiformesConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                brachaelurusColcloughi,
                                brachaelurusWaddi
                            ]
                        },
                        orectolobidaeConfig
                    ]
                },
                {
                    children: [
                        hemiscylliidaeConfig,
                        {
                            children: [
                                {
                                    children: [
                                        ginglymostomaCirratum,
                                        nebriusFerrugineus
                                    ]
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                pseudoginglymostomaBrevicaudatum,
                                                stegostomaFasciatum
                                            ]
                                        },
                                        rhincodonTypus
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        parascylliumCollare 
    ]
}
