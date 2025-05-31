import { amblyrajaBadia } from "../species/rajiformes/rajidae/amblyraja-badia";
import { amblyrajaDoellojuradoi } from "../species/rajiformes/rajidae/amblyraja-doellojuradoi";
import { amblyrajaHyperborea } from "../species/rajiformes/rajidae/amblyraja-hyperborea";
import { amblyrajaJenseni } from "../species/rajiformes/rajidae/amblyraja-jenseni";
import { amblyrajaRadiata } from "../species/rajiformes/rajidae/amblyraja-radiata";
import { dipturusAustralis } from "../species/rajiformes/rajidae/dipturus-australis";
import { dipturusBatis } from "../species/rajiformes/rajidae/dipturus-batis";
import { dipturusCerva } from "../species/rajiformes/rajidae/dipturus-cerva";
import { dipturusConfusus } from "../species/rajiformes/rajidae/dipturus-confusus";
import { dipturusGudgeri } from "../species/rajiformes/rajidae/dipturus-gudgeri";
import { dipturusHealdi } from "../species/rajiformes/rajidae/dipturus-healdi";
import { dipturusInnominatus } from "../species/rajiformes/rajidae/dipturus-innominatus";
import { dipturusLaevis } from "../species/rajiformes/rajidae/dipturus-laevis";
import { dipturusLeptocauda } from "../species/rajiformes/rajidae/dipturus-leptocauda";
import { dipturusLinteus } from "../species/rajiformes/rajidae/dipturus-linteus";
import { dipturusOxyrhinchus } from "../species/rajiformes/rajidae/dipturus-oxyrhinchus";
import { dipturusPullopunctatus } from "../species/rajiformes/rajidae/dipturus-pullopunctatus";
import { dipturusSpringeri } from "../species/rajiformes/rajidae/dipturus-springeri";
import { dipturusTengu } from "../species/rajiformes/rajidae/dipturus-tengu";
import { dipturusTrachyderma } from "../species/rajiformes/rajidae/dipturus-trachyderma";
import { leucorajaErinacea } from "../species/rajiformes/rajidae/leucoraja-erinacea";
import { leucorajaGarmani } from "../species/rajiformes/rajidae/leucoraja-garmani";
import { leucorajaOcellata } from "../species/rajiformes/rajidae/leucoraja-ocellata";
import { okamejeiJensenae } from "../species/rajiformes/rajidae/okamejei-jensenae";
import { rajaAsterias } from "../species/rajiformes/rajidae/raja-asterias";
import { rajaClavata } from "../species/rajiformes/rajidae/raja-clavata";
import { rajaEglanteria } from "../species/rajiformes/rajidae/raja-eglanteria";
import { rajaMiraletus } from "../species/rajiformes/rajidae/raja-miraletus";
import { rajaMontagui } from "../species/rajiformes/rajidae/raja-montagui";
import { rajaStraeleni } from "../species/rajiformes/rajidae/raja-straeleni";
import { rajaVelezi } from "../species/rajiformes/rajidae/raja-velezi";
import { rajellaCaudaspinosa } from "../species/rajiformes/rajidae/rajella-caudaspinosa";
import { rajellaFyllae } from "../species/rajiformes/rajidae/rajella-fyllae";
import { rajellaKukujevi } from "../species/rajiformes/rajidae/rajella-kukujevi";
import { rajellaLeopardus } from "../species/rajiformes/rajidae/rajella-leopardus";
import { rostrorajaAlba } from "../species/rajiformes/rajidae/rostroraja-alba";
import { spinirajaWhitleyi } from "../species/rajiformes/rajidae/spiniraja-whitleyi";
import { zearajaChilensis } from "../species/rajiformes/rajidae/zearaja-chilensis";
import { zearajaNasuta } from "../species/rajiformes/rajidae/zearaja-nasuta";

export const rajidaeConfig = {
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
                                                                {
                                                                    children: [
                                                                        amblyrajaBadia,
                                                                        amblyrajaHyperborea
                                                                    ]
                                                                },
                                                                amblyrajaJenseni
                                                            ]
                                                        },
                                                        amblyrajaDoellojuradoi
                                                    ]
                                                },
                                                amblyrajaRadiata
                                            ]
                                        },
                                        {
                                            children: [
                                                dipturusLinteus,
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                rajellaCaudaspinosa,
                                                                rajellaFyllae
                                                            ]
                                                        },
                                                        {
                                                            children: [
                                                                rajellaKukujevi,
                                                                rajellaLeopardus
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        leucorajaErinacea,
                                        leucorajaOcellata
                                    ]
                                }
                            ]
                        },
                        leucorajaGarmani
                    ]
                },
                {
                    children: [
                        okamejeiJensenae,
                        {
                            children: [
                                rajaEglanteria,
                                {
                                    children: [
                                        rajaVelezi,
                                        rostrorajaAlba
                                    ]
                                }
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
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        dipturusAustralis,
                                                        {
                                                            children: [
                                                                dipturusCerva,
                                                                dipturusConfusus
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    children: [
                                                        dipturusHealdi,
                                                        {
                                                            children: [
                                                                dipturusGudgeri,
                                                                dipturusInnominatus
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        dipturusTengu
                                    ]
                                },
                                {
                                    children: [
                                        {
                                            children: [
                                                dipturusLeptocauda,
                                                dipturusTrachyderma
                                            ]
                                        },
                                        {
                                            children: [
                                                zearajaChilensis,
                                                zearajaNasuta
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
                                        dipturusBatis,
                                        dipturusOxyrhinchus
                                    ]
                                },
                                dipturusLaevis
                            ]
                        },
                        dipturusPullopunctatus,
                        dipturusSpringeri,
                        spinirajaWhitleyi
                    ]
                },
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        rajaAsterias,
                                        {
                                            children: [
                                                rajaClavata,
                                                rajaStraeleni
                                            ]
                                        }
                                    ]
                                },
                                rajaMiraletus
                            ]
                        },
                        rajaMontagui
                    ]
                }
            ]
        }
    ]   
}