import { sphyrnaLewini } from "../species/carcharhiniformes/sphyrnidae/sphyrna-lewini";
import { sphyrnaZygaena } from "../species/carcharhiniformes/sphyrnidae/sphyrna-zygaena";
import { sphyrnaMokarran } from "../species/carcharhiniformes/sphyrnidae/sphyrna-mokarran";
import { sphyrnaTiburo } from "../species/carcharhiniformes/sphyrnidae/sphyrna-tiburo";
import { sphyrnaTudes } from "../species/carcharhiniformes/sphyrnidae/sphyrna-tudes";
import { sphyrnaCorona } from "../species/carcharhiniformes/sphyrnidae/sphyrna-corona";

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
