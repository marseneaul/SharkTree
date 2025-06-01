import { mustelusAlbipinnis } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-albipinnis";
import { mustelusAntarcticus } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-antarcticus";
import { mustelusAsterias } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-asterias";
import { mustelusCalifornicus } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-californicus";
import { mustelusCanis } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-canis";
import { mustelusHenlei } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-henlei";
import { mustelusLenticulatus } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-lenticulatus";
import { mustelusLunulatus } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-lunulatus";
import { mustelusManazo } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-manazo";
import { mustelusMosis } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-mosis";
import { mustelusMustelus } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-mustelus";
import { mustelusNorrisi } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-norrisi";
import { mustelusPalumbes } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-palumbes";
import { mustelusRavidus } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-ravidus";
import { mustelusSchmitti } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-schmitti";
import { mustelusStevensi } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-stevensi";
import { mustelusWidodoi } from "../../species/sharks/carcharhiniformes/triakidae/mustelus-widodoi";
import { furgaleusMacki } from "../../species/sharks/carcharhiniformes/triakidae/furgaleus-macki";
import { galeorhinusGaleus } from "../../species/sharks/carcharhiniformes/triakidae/galeorhinus-galeus";
import { hemitriakisComplicofasciata } from "../../species/sharks/carcharhiniformes/triakidae/hemitriakis-complicofasciata";
import { hemitriakisFalcata } from "../../species/sharks/carcharhiniformes/triakidae/hemitriakis-falcata";
import { hemitriakisJapanica } from "../../species/sharks/carcharhiniformes/triakidae/hemitriakis-japanica";
import { hemitriakisLeucoperiptera } from "../../species/sharks/carcharhiniformes/triakidae/hemitriakis-leucoperiptera";
import { hypogaleusHyugaensis } from "../../species/sharks/carcharhiniformes/triakidae/hypogaleus-hyugaensis";
import { scylliogaleusQuecketti } from "../../species/sharks/carcharhiniformes/triakidae/scylliogaleus-quecketti";
import { triakisMegalopterus } from "../../species/sharks/carcharhiniformes/triakidae/triakis-megalopterus";
import { triakisScyllium } from "../../species/sharks/carcharhiniformes/triakidae/triakis-scyllium";
import { triakisSemifasciata } from "../../species/sharks/carcharhiniformes/triakidae/triakis-semifasciata";


export const triakidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        furgaleusMacki,
                        {
                            children: [
                                {
                                    children: [
                                        hemitriakisComplicofasciata,
                                        hemitriakisFalcata
                                    ]
                                },
                                {
                                    children: [
                                        hemitriakisJapanica,
                                        hemitriakisLeucoperiptera
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    children: [
                        triakisScyllium,
                        triakisSemifasciata
                    ]
                }
            ]
        },
        {
            children: [
                galeorhinusGaleus,
                hypogaleusHyugaensis
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
                                        {
                                            children: [
                                                mustelusAlbipinnis,
                                                mustelusCanis
                                            ]
                                        },
                                        mustelusHenlei
                                    ]
                                },
                                mustelusNorrisi
                            ]
                        },
                        mustelusCalifornicus,
                        mustelusLunulatus,
                        {
                            children: [
                                mustelusMosis,
                                {
                                    children: [
                                        mustelusRavidus,
                                        mustelusWidodoi
                                    ]
                                }
                            ]
                        },
                        mustelusMustelus
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
                                                {
                                                    children: [
                                                        mustelusAntarcticus,
                                                        mustelusLenticulatus
                                                    ]
                                                },
                                                mustelusStevensi
                                            ]
                                        },
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        mustelusAsterias,
                                                        mustelusPalumbes
                                                    ]
                                                },
                                                mustelusSchmitti
                                            ]
                                        }
                                    ]
                                },
                                mustelusManazo
                            ]
                        },
                        {
                            children: [
                                scylliogaleusQuecketti,
                                triakisMegalopterus
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
