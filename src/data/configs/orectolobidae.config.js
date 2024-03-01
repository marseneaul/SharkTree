import { orectolobusFloridus } from "../species/orectolobiformes/orectolobidae/orectolobus-floridus";
import { orectolobusHalei } from "../species/orectolobiformes/orectolobidae/orectolobus-halei";
import { orectolobusHutchinsi } from "../species/orectolobiformes/orectolobidae/orectolobus-hutchinsi";
import { orectolobusMaculatus } from "../species/orectolobiformes/orectolobidae/orectolobus-maculatus";
import { orectolobusOrnatus } from "../species/orectolobiformes/orectolobidae/orectolobus-ornatus";
import { orectolobusParvimaculatus } from "../species/orectolobiformes/orectolobidae/orectolobus-parvimaculatus";
import { eucrossorhinusDasypogon } from "../species/orectolobiformes/orectolobidae/eucrossorhinus-dasypogon";

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