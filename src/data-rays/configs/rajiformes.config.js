import { crurirajaHulleyi } from "../species/rajiformes/cruriraja-hulleyi";
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
                        crurirajaHulleyi
                    ]
                },
                sinobatisBulbicauda
            ]
        }
    ]
}