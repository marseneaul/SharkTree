import { orectolobusFloridus } from "../../species/sharks/orectolobiformes/orectolobidae/orectolobus-floridus";
import { orectolobusHalei } from "../../species/sharks/orectolobiformes/orectolobidae/orectolobus-halei";
import { orectolobusHutchinsi } from "../../species/sharks/orectolobiformes/orectolobidae/orectolobus-hutchinsi";
import { orectolobusMaculatus } from "../../species/sharks/orectolobiformes/orectolobidae/orectolobus-maculatus";
import { orectolobusOrnatus } from "../../species/sharks/orectolobiformes/orectolobidae/orectolobus-ornatus";
import { orectolobusParvimaculatus } from "../../species/sharks/orectolobiformes/orectolobidae/orectolobus-parvimaculatus";
import { eucrossorhinusDasypogon } from "../../species/sharks/orectolobiformes/orectolobidae/eucrossorhinus-dasypogon";

export const orectolobidaeConfig = {
    children: [
        eucrossorhinusDasypogon,
        {
            children: [
                orectolobusFloridus,
                {
                    children: [
                        {
                            children: [
                                orectolobusHalei,
                                {
                                    children: [
                                        {
                                            children: [
                                                orectolobusHutchinsi,
                                                orectolobusParvimaculatus
                                            ]
                                        },
                                        orectolobusMaculatus
                                    ]
                                }
                            ]
                        },
                        orectolobusOrnatus 
                    ]
                }
            ]
        }
    ]
}