import { hexanchiformesConfig } from "./hexanchiformes.config";
import { squaliformesConfig } from "./squaliformes.config";
import { echinorhinidaeConfig } from "./echinorhinidae.config";
import { pristiophoriformesConfig } from "./pristiophoriformes.config";
import { squatiniformesConfig } from "./squatiniformes.config";

export const squalomorphiiConfig = {
    children: [
        {
            children: [
                squaliformesConfig,
                {
                    children: [
                        echinorhinidaeConfig,
                        {
                            children: [
                                pristiophoriformesConfig,
                                squatiniformesConfig
                            ]
                        }
                    ]
                }
            ]
        },
        hexanchiformesConfig
    ]
}