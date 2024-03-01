import { centrophorusAcus } from "../species/squaliformes/centrophoridae/centrophorus-acus";
import { centrophorusGranulosus } from "../species/squaliformes/centrophoridae/centrophorus-granulosus";
import { centrophorusHarrissoni } from "../species/squaliformes/centrophoridae/centrophorus-harrissoni";
import { centrophorusIsodon } from "../species/squaliformes/centrophoridae/centrophorus-isodon";
import { centrophorusLusitanicus } from "../species/squaliformes/centrophoridae/centrophorus-lusitanicus";
import { centrophorusMoluccensis } from "../species/squaliformes/centrophoridae/centrophorus-moluccensis";
import { centrophorusSquamosus } from "../species/squaliformes/centrophoridae/centrophorus-squamosus";
import { centrophorusZeehaani } from "../species/squaliformes/centrophoridae/centrophorus-zeehaani";
import { deaniaCalcea } from "../species/squaliformes/centrophoridae/deania-calcea";
import { deaniaProfundorum } from "../species/squaliformes/centrophoridae/deania-profundorum";
import { deaniaQuadrispinosum } from "../species/squaliformes/centrophoridae/deania-quadrispinosum";

export const centrophoridaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                centrophorusLusitanicus,
                                centrophorusHarrissoni,
                                centrophorusIsodon
                            ]
                        },
                        {
                            children: [
                                centrophorusSquamosus,
                                {
                                    children: [
                                        centrophorusGranulosus,
                                        centrophorusAcus
                                    ]
                                }
                            ]
                        }
                    ]
                },
                centrophorusZeehaani
            ]
        },
        centrophorusMoluccensis,
        {
            children: [
                deaniaCalcea,
                {
                    children: [
                        deaniaQuadrispinosum,
                        deaniaProfundorum
                    ]
                }
            ]
        }
    ]
}