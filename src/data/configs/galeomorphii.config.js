import { orectolobiformesConfig } from "./orectolobiformes.config";
import { lamniformesConfig } from "./lamniformes.config";
import { carcharhiniformesConfig } from "./carcharhiniformes.config";
import { heterodontiformesConfig } from "./heterodontiformes.config";

export const galeomorphiiConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        lamniformesConfig,
                        carcharhiniformesConfig
                    ]
                },
                orectolobiformesConfig
            ]
        },
        heterodontiformesConfig
    ]
}
