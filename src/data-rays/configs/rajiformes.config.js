import { irolitaWaitii } from "../species/rajiformes/irolita-waitii";
import { sinobatisBulbicauda } from "../species/rajiformes/sinobatis-bulbicauda";
import { arhynchobatidaeConfig } from "./arhynchobatidae.config";
import { rajidaeConfig } from "./rajidae.config";

export const rajiformesConfig = {
    children: [
        rajidaeConfig,
        {
            children: [
                {
                    children: [
                        arhynchobatidaeConfig,
                        irolitaWaitii
                    ]
                },
                sinobatisBulbicauda
            ]
        }
    ]
}