import { mustelusAlbipinnis } from "../species/carcharhiniformes/triakidae/mustelus-albipinnis";
import { mustelusAntarcticus } from "../species/carcharhiniformes/triakidae/mustelus-antarcticus";
import { mustelusAsterias } from "../species/carcharhiniformes/triakidae/mustelus-asterias";
import { mustelusCalifornicus } from "../species/carcharhiniformes/triakidae/mustelus-californicus";
import { mustelusCanis } from "../species/carcharhiniformes/triakidae/mustelus-canis";
import { mustelusHenlei } from "../species/carcharhiniformes/triakidae/mustelus-henlei";
import { mustelusLenticulatus } from "../species/carcharhiniformes/triakidae/mustelus-lenticulatus";
import { mustelusLunulatus } from "../species/carcharhiniformes/triakidae/mustelus-lunulatus";
import { mustelusManazo } from "../species/carcharhiniformes/triakidae/mustelus-manazo";
import { mustelusMosis } from "../species/carcharhiniformes/triakidae/mustelus-mosis";
import { mustelusMustelus } from "../species/carcharhiniformes/triakidae/mustelus-mustelus";
import { mustelusNorrisi } from "../species/carcharhiniformes/triakidae/mustelus-norrisi";
import { mustelusPalumbes } from "../species/carcharhiniformes/triakidae/mustelus-palumbes";
import { mustelusRavidus } from "../species/carcharhiniformes/triakidae/mustelus-ravidus";
import { mustelusSchmitti } from "../species/carcharhiniformes/triakidae/mustelus-schmitti";
import { mustelusStevensi } from "../species/carcharhiniformes/triakidae/mustelus-stevensi";
import { mustelusWidodoi } from "../species/carcharhiniformes/triakidae/mustelus-widodoi";
import { furgaleusMacki } from "../species/carcharhiniformes/triakidae/furgaleus-macki";
import { galeorhinusGaleus } from "../species/carcharhiniformes/triakidae/galeorhinus-galeus";
import { hemitriakisComplicofasciata } from "../species/carcharhiniformes/triakidae/hemitriakis-complicofasciata";
import { hemitriakisFalcata } from "../species/carcharhiniformes/triakidae/hemitriakis-falcata";
import { hemitriakisJapanica } from "../species/carcharhiniformes/triakidae/hemitriakis-japanica";
import { hemitriakisLeucoperiptera } from "../species/carcharhiniformes/triakidae/hemitriakis-leucoperiptera";
import { hypogaleusHyugaensis } from "../species/carcharhiniformes/triakidae/hypogaleus-hyugaensis";
import { scylliogaleusQuecketti } from "../species/carcharhiniformes/triakidae/scylliogaleus-quecketti";
import { triakisMegalopterus } from "../species/carcharhiniformes/triakidae/triakis-megalopterus";
import { triakisScyllium } from "../species/carcharhiniformes/triakidae/triakis-scyllium";
import { triakisSemifasciata } from "../species/carcharhiniformes/triakidae/triakis-semifasciata";


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
