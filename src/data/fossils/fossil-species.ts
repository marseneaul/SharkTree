import { doliodus } from "./fossils/doliodus";
import { gogoselachus } from "./fossils/gogoselachus";
import { pucapampella } from "./fossils/pucapampella";
import { shenacanthus } from "./fossils/shenacanthus";
import { tantalepis } from "./fossils/tantalepis";

export const fossilSpeciesConfig = {
    children: [
        tantalepis, 
        {
            children: [
                {
                    children: [
                        shenacanthus,
                        {
                            children: [
                                pucapampella,
                                {
                                    children: [
                                        doliodus,
                                        {
                                            children: [
                                                gogoselachus,
                                                {},
                                                {}
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                // acanthodians
            ]
        }
    ]
}