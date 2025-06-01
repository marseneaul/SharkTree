import { heterodontusFrancisci } from "../../species/sharks/heterodontiformes/heterodontus-francisci";
import { heterodontusMexicanus } from "../../species/sharks/heterodontiformes/heterodontus-mexicanus";
import { heterodontusGaleatus } from "../../species/sharks/heterodontiformes/heterodontus-galeatus";
import { heterodontusPortusjacksoni } from "../../species/sharks/heterodontiformes/heterodontus-portusjacksoni";
import { heterodontusZebra } from "../../species/sharks/heterodontiformes/heterodontus-zebra";

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
