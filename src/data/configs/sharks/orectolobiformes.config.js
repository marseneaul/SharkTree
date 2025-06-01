import { brachaelurusColcloughi } from "../../species/sharks/orectolobiformes/brachaelurus-colcloughi";
import { brachaelurusWaddi } from "../../species/sharks/orectolobiformes/brachaelurus-waddi";
import { ginglymostomaCirratum } from "../../species/sharks/orectolobiformes/ginglymostoma-cirratum";
import { pseudoginglymostomaBrevicaudatum } from "../../species/sharks/orectolobiformes/pseudoginglymostoma-brevicaudatum";
import { nebriusFerrugineus } from "../../species/sharks/orectolobiformes/nebrius-ferrugineus";
import { stegostomaFasciatum } from "../../species/sharks/orectolobiformes/stegostoma-fasciatum";
import { rhincodonTypus } from "../../species/sharks/orectolobiformes/rhincodon-typus";
import { parascylliumCollare } from "../../species/sharks/orectolobiformes/parascyllium-collare";

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
