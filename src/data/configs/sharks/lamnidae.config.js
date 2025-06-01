import { carcharodonCarcharias } from "../../species/sharks/lamniformes/lamnidae/carcharodon-carcharias";
import { isurusOxyrinchus } from "../../species/sharks/lamniformes/lamnidae/isurus-oxyrinchus";
import { isurusPaucus } from "../../species/sharks/lamniformes/lamnidae/isurus-paucus";
import { lamnaDitropis } from "../../species/sharks/lamniformes/lamnidae/lamna-ditropis";
import { lamnaNasus } from "../../species/sharks/lamniformes/lamnidae/lamna-nasus";

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
