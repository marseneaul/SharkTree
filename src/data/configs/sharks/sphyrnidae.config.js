import { sphyrnaLewini } from "../../species/sharks/carcharhiniformes/sphyrnidae/sphyrna-lewini";
import { sphyrnaZygaena } from "../../species/sharks/carcharhiniformes/sphyrnidae/sphyrna-zygaena";
import { sphyrnaMokarran } from "../../species/sharks/carcharhiniformes/sphyrnidae/sphyrna-mokarran";
import { sphyrnaTiburo } from "../../species/sharks/carcharhiniformes/sphyrnidae/sphyrna-tiburo";
import { sphyrnaTudes } from "../../species/sharks/carcharhiniformes/sphyrnidae/sphyrna-tudes";
import { sphyrnaCorona } from "../../species/sharks/carcharhiniformes/sphyrnidae/sphyrna-corona";

export const sphyrnidaeConfig = {
    children: [
        sphyrnaMokarran,
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                sphyrnaTiburo,
                                sphyrnaTudes
                            ]
                        },
                        sphyrnaCorona
                    ]
                },
                sphyrnaLewini
            ]
        },
        sphyrnaZygaena
    ]
}
