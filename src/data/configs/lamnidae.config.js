import { carcharodonCarcharias } from "../species/lamniformes/lamnidae/carcharodon-carcharias";
import { isurusOxyrinchus } from "../species/lamniformes/lamnidae/isurus-oxyrinchus";
import { isurusPaucus } from "../species/lamniformes/lamnidae/isurus-paucus";
import { lamnaDitropis } from "../species/lamniformes/lamnidae/lamna-ditropis";
import { lamnaNasus } from "../species/lamniformes/lamnidae/lamna-nasus";

export const lamnidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        isurusOxyrinchus,
                        isurusPaucus
                    ]
                },
                carcharodonCarcharias
            ]
        },
        {
            children: [
                lamnaDitropis,
                lamnaNasus
            ]
        }
    ]
}
