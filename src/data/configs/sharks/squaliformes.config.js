
import { centrophoridaeConfig } from "./centrophoridae.config";
import { squalidaeConfig } from "./squalidae.config";
import { dalatiidaeConfig } from "./dalatiidae.config";
import { somniosidaeOxynotidaeConfig } from "./somniosidae-oxynotidae.config";
import { etmopteridaeConfig } from "./etmopteridae.config";

export const squaliformesConfig = {
    children: [
        centrophoridaeConfig,
        {
            children: [
                etmopteridaeConfig,
                somniosidaeOxynotidaeConfig,
                {
                    children: [
                        squalidaeConfig,
                        dalatiidaeConfig
                    ]
                }
            ]
        }
    ]
}