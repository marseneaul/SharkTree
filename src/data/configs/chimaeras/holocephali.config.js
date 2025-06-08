import { callorhinchidaeConfig } from "./callorhinchidae.config";
import { chimaeiridaeConfig } from "./chimaeiridae.config";
import { rhinochimaeridaeConfig } from "./rhinochimaeridae.config";

// Contribution to the molecular phylogenetic analysis of extant holocephalan fishes (Holocephali, Chimaeriformes)
export const holocephaliConfig = {
    children: [
        {
            children: [
                rhinochimaeridaeConfig,
                chimaeiridaeConfig
            ]
        },
        callorhinchidaeConfig
    ]
}