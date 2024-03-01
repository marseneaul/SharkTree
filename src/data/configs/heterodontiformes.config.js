import { heterodontusFrancisci } from "../species/heterodontiformes/heterodontus-francisci";
import { heterodontusMexicanus } from "../species/heterodontiformes/heterodontus-mexicanus";
import { heterodontusGaleatus } from "../species/heterodontiformes/heterodontus-galeatus";
import { heterodontusPortusjacksoni } from "../species/heterodontiformes/heterodontus-portusjacksoni";
import { heterodontusZebra } from "../species/heterodontiformes/heterodontus-zebra";

export const heterodontiformesConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                heterodontusPortusjacksoni,
                                heterodontusZebra
                            ]
                        },
                        heterodontusGaleatus
                    ]
                },
                heterodontusMexicanus
            ]
        },
        heterodontusFrancisci
    ]
}
