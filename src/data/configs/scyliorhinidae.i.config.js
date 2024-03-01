import { apristurusAmpliceps } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-ampliceps";
import { apristurusAustralis } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-australis";
import { apristurusBrunneus } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-brunneus";
import { apristurusExsanguis } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-exsanguis";
import { apristurusKampae } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-kampae";
import { apristurusLaurussonii } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-laurussonii";
import { apristurusMacrorhynchus } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-macrorhynchus";
import { apristurusManis } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-manis";
import { apristurusMelanoasper } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-melanoasper";
import { apristurusPlatyrhynchus } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-platyrhynchus";
import { apristurusProfundorum } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-profundorum";
import { apristurusSinensis } from "../species/carcharhiniformes/scyliorhinidae-i/apristurus-sinensis";
import { asymbolusAnalis } from "../species/carcharhiniformes/scyliorhinidae-i/asymbolus-analis";
import { asymbolusParvus } from "../species/carcharhiniformes/scyliorhinidae-i/asymbolus-parvus";
import { asymbolusRubiginosus } from "../species/carcharhiniformes/scyliorhinidae-i/asymbolus-rubiginosus";
import { bythaelurusCanescens } from "../species/carcharhiniformes/scyliorhinidae-i/bythaelurus-canescens";
import { bythaelurusDawsoni } from "../species/carcharhiniformes/scyliorhinidae-i/bythaelurus-dawsoni";
import { figaroBoardmani } from "../species/carcharhiniformes/scyliorhinidae-i/figaro-boardmani";
import { galeusArae } from "../species/carcharhiniformes/scyliorhinidae-i/galeus-arae";
import { galeusMelastomus } from "../species/carcharhiniformes/scyliorhinidae-i/galeus-melastomus";
import { galeusMurinus } from "../species/carcharhiniformes/scyliorhinidae-i/galeus-murinus";
import { galeusPolli } from "../species/carcharhiniformes/scyliorhinidae-i/galeus-polli";
import { galeusSauteri } from "../species/carcharhiniformes/scyliorhinidae-i/galeus-sauteri";
import { halaelurusBuergeri } from "../species/carcharhiniformes/scyliorhinidae-i/halaelurus-buergeri";
import { halaelurusLineatus } from "../species/carcharhiniformes/scyliorhinidae-i/halaelurus-lineatus";
import { halaelurusNatalensis } from "../species/carcharhiniformes/scyliorhinidae-i/halaelurus-natalensis";
import { halaelurusSellus } from "../species/carcharhiniformes/scyliorhinidae-i/halaelurus-sellus";
import { haploblepharusEdwardsii } from "../species/carcharhiniformes/scyliorhinidae-i/haploblepharus-edwardsii";
import { holohalaelurusRegani } from "../species/carcharhiniformes/scyliorhinidae-i/holohalaelurus-regani";
import { parmaturusXaniurus } from "../species/carcharhiniformes/scyliorhinidae-i/parmaturus-xaniurus";


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