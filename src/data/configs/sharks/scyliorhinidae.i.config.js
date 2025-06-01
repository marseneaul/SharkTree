import { apristurusAmpliceps } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-ampliceps";
import { apristurusAustralis } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-australis";
import { apristurusBrunneus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-brunneus";
import { apristurusExsanguis } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-exsanguis";
import { apristurusKampae } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-kampae";
import { apristurusLaurussonii } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-laurussonii";
import { apristurusMacrorhynchus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-macrorhynchus";
import { apristurusManis } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-manis";
import { apristurusMelanoasper } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-melanoasper";
import { apristurusPlatyrhynchus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-platyrhynchus";
import { apristurusProfundorum } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-profundorum";
import { apristurusSinensis } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/apristurus-sinensis";
import { asymbolusAnalis } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/asymbolus-analis";
import { asymbolusParvus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/asymbolus-parvus";
import { asymbolusRubiginosus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/asymbolus-rubiginosus";
import { bythaelurusCanescens } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/bythaelurus-canescens";
import { bythaelurusDawsoni } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/bythaelurus-dawsoni";
import { figaroBoardmani } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/figaro-boardmani";
import { galeusArae } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/galeus-arae";
import { galeusMelastomus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/galeus-melastomus";
import { galeusMurinus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/galeus-murinus";
import { galeusPolli } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/galeus-polli";
import { galeusSauteri } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/galeus-sauteri";
import { halaelurusBuergeri } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/halaelurus-buergeri";
import { halaelurusLineatus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/halaelurus-lineatus";
import { halaelurusNatalensis } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/halaelurus-natalensis";
import { halaelurusSellus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/halaelurus-sellus";
import { haploblepharusEdwardsii } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/haploblepharus-edwardsii";
import { holohalaelurusRegani } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/holohalaelurus-regani";
import { parmaturusXaniurus } from "../../species/sharks/carcharhiniformes/scyliorhinidae-i/parmaturus-xaniurus";


export const scyliorhinidaeIConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                apristurusAmpliceps,
                                                                apristurusManis
                                                            ]
                                                        },
                                                        apristurusProfundorum
                                                    ]
                                                },
                                                apristurusKampae
                                            ]
                                        },
                                        apristurusAustralis
                                    ]
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                apristurusBrunneus,
                                                                apristurusLaurussonii
                                                            ]
                                                        },
                                                        apristurusMelanoasper
                                                    ]
                                                },
                                                {
                                                    children: [
                                                        apristurusSinensis,
                                                        apristurusPlatyrhynchus
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            children: [
                                                apristurusExsanguis,
                                                apristurusMacrorhynchus
                                            ]
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        galeusSauteri,
                                        parmaturusXaniurus
                                    ]
                                }
                            ]
                        },
                        {
                            children: [
                                {
                                    children: [
                                        galeusArae,
                                        {
                                            children: [
                                                galeusPolli,
                                                galeusMelastomus
                                            ]
                                        }
                                    ]
                                },
                                galeusMurinus
                            ]
                        }
                    ]
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        asymbolusAnalis,
                                        {
                                            children: [
                                                asymbolusParvus,
                                                asymbolusRubiginosus
                                            ]
                                        }
                                    ]
                                },
                                figaroBoardmani
                            ]
                        },
                        {
                            children: [
                                bythaelurusDawsoni,
                                bythaelurusCanescens
                            ]
                        }
                    ]
                }
            ]
        },
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        halaelurusLineatus,
                                        halaelurusNatalensis
                                    ]
                                },
                                haploblepharusEdwardsii
                            ]
                        },
                        {
                            children: [
                                halaelurusBuergeri,
                                halaelurusSellus
                            ]
                        }
                    ]
                },
                holohalaelurusRegani
            ]
        }
    ]
}