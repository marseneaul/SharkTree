import { amblyrajaBadia } from "../../species/rays/rajiformes/rajidae/amblyraja-badia";
import { amblyrajaDoellojuradoi } from "../../species/rays/rajiformes/rajidae/amblyraja-doellojuradoi";
import { amblyrajaHyperborea } from "../../species/rays/rajiformes/rajidae/amblyraja-hyperborea";
import { amblyrajaJenseni } from "../../species/rays/rajiformes/rajidae/amblyraja-jenseni";
import { amblyrajaRadiata } from "../../species/rays/rajiformes/rajidae/amblyraja-radiata";
import { dipturusAustralis } from "../../species/rays/rajiformes/rajidae/dipturus-australis";
import { dipturusBatis } from "../../species/rays/rajiformes/rajidae/dipturus-batis";
import { dipturusCerva } from "../../species/rays/rajiformes/rajidae/dipturus-cerva";
import { dipturusConfusus } from "../../species/rays/rajiformes/rajidae/dipturus-confusus";
import { dipturusGudgeri } from "../../species/rays/rajiformes/rajidae/dipturus-gudgeri";
import { dipturusHealdi } from "../../species/rays/rajiformes/rajidae/dipturus-healdi";
import { dipturusInnominatus } from "../../species/rays/rajiformes/rajidae/dipturus-innominatus";
import { dipturusLaevis } from "../../species/rays/rajiformes/rajidae/dipturus-laevis";
import { dipturusLeptocauda } from "../../species/rays/rajiformes/rajidae/dipturus-leptocauda";
import { dipturusLinteus } from "../../species/rays/rajiformes/rajidae/dipturus-linteus";
import { dipturusOxyrhinchus } from "../../species/rays/rajiformes/rajidae/dipturus-oxyrhinchus";
import { dipturusPullopunctatus } from "../../species/rays/rajiformes/rajidae/dipturus-pullopunctatus";
import { dipturusSpringeri } from "../../species/rays/rajiformes/rajidae/dipturus-springeri";
import { dipturusTengu } from "../../species/rays/rajiformes/rajidae/dipturus-tengu";
import { dipturusTrachyderma } from "../../species/rays/rajiformes/rajidae/dipturus-trachyderma";
import { leucorajaErinacea } from "../../species/rays/rajiformes/rajidae/leucoraja-erinacea";
import { leucorajaGarmani } from "../../species/rays/rajiformes/rajidae/leucoraja-garmani";
import { leucorajaOcellata } from "../../species/rays/rajiformes/rajidae/leucoraja-ocellata";
import { okamejeiJensenae } from "../../species/rays/rajiformes/rajidae/okamejei-jensenae";
import { rajaAsterias } from "../../species/rays/rajiformes/rajidae/raja-asterias";
import { rajaClavata } from "../../species/rays/rajiformes/rajidae/raja-clavata";
import { rajaEglanteria } from "../../species/rays/rajiformes/rajidae/raja-eglanteria";
import { rajaMiraletus } from "../../species/rays/rajiformes/rajidae/raja-miraletus";
import { rajaMontagui } from "../../species/rays/rajiformes/rajidae/raja-montagui";
import { rajaStraeleni } from "../../species/rays/rajiformes/rajidae/raja-straeleni";
import { rajaVelezi } from "../../species/rays/rajiformes/rajidae/raja-velezi";
import { rajellaCaudaspinosa } from "../../species/rays/rajiformes/rajidae/rajella-caudaspinosa";
import { rajellaFyllae } from "../../species/rays/rajiformes/rajidae/rajella-fyllae";
import { rajellaKukujevi } from "../../species/rays/rajiformes/rajidae/rajella-kukujevi";
import { rajellaLeopardus } from "../../species/rays/rajiformes/rajidae/rajella-leopardus";
import { rostrorajaAlba } from "../../species/rays/rajiformes/rajidae/rostroraja-alba";
import { spinirajaWhitleyi } from "../../species/rays/rajiformes/rajidae/spiniraja-whitleyi";
import { zearajaChilensis } from "../../species/rays/rajiformes/rajidae/zearaja-chilensis";
import { zearajaNasuta } from "../../species/rays/rajiformes/rajidae/zearaja-nasuta";

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