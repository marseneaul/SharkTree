import { myliobatiformesConfig } from "./myliobatiformes.config";
import { platyrhinidaeConfig } from "./platyrhinidae.config";
import { rhinopristiformesConfig } from "./rhinopristiformes.config";
import { torpediniformesConfig } from "./torpediniformes.config";

export const batomorphiConfig = {
    children: [
        rajiformesConfig,
        rhinopristiformesConfig,
        {
            children: [
                torpediniformesConfig,
                platyrhinidaeConfig
            ]
        },
        myliobatiformesConfig
    ]
}