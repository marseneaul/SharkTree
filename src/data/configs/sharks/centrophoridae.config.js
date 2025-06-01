import { centrophorusAcus } from "../../species/sharks/squaliformes/centrophoridae/centrophorus-acus";
import { centrophorusGranulosus } from "../../species/sharks/squaliformes/centrophoridae/centrophorus-granulosus";
import { centrophorusHarrissoni } from "../../species/sharks/squaliformes/centrophoridae/centrophorus-harrissoni";
import { centrophorusIsodon } from "../../species/sharks/squaliformes/centrophoridae/centrophorus-isodon";
import { centrophorusLusitanicus } from "../../species/sharks/squaliformes/centrophoridae/centrophorus-lusitanicus";
import { centrophorusMoluccensis } from "../../species/sharks/squaliformes/centrophoridae/centrophorus-moluccensis";
import { centrophorusSquamosus } from "../../species/sharks/squaliformes/centrophoridae/centrophorus-squamosus";
import { centrophorusZeehaani } from "../../species/sharks/squaliformes/centrophoridae/centrophorus-zeehaani";
import { deaniaCalcea } from "../../species/sharks/squaliformes/centrophoridae/deania-calcea";
import { deaniaProfundorum } from "../../species/sharks/squaliformes/centrophoridae/deania-profundorum";
import { deaniaQuadrispinosum } from "../../species/sharks/squaliformes/centrophoridae/deania-quadrispinosum";

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