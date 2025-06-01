import { dasyatisAmericana } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-americana";
import { dasyatisBrevicaudata } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-brevicaudata";
import { dasyatisBrevis } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-brevis";
import { dasyatisCentroura } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-centroura";
import { dasyatisChrysonota } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-chrysonota";
import { dasyatisLonga } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-longa";
import { dasyatisMargarita } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-margarita";
import { dasyatisMargeritella } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-margeritella";
import { dasyatisSabina } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-sabina";
import { dasyatisSay } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-say";
import { dasyatisUshiei } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-ushiei";
import { dasyatisZugei } from "../../species/rays/myliobatiformes/dasyatidae/dasyatis-zugei";
import { himanturaAstra } from "../../species/rays/myliobatiformes/dasyatidae/himantura-astra";
import { himanturaFai } from "../../species/rays/myliobatiformes/dasyatidae/himantura-fai";
import { himanturaGerrardi } from "../../species/rays/myliobatiformes/dasyatidae/himantura-gerrardi";
import { himanturaGranulata } from "../../species/rays/myliobatiformes/dasyatidae/himantura-granulata";
import { himanturaImbricata } from "../../species/rays/myliobatiformes/dasyatidae/himantura-imbricata";
import { himanturaJenkinsii } from "../../species/rays/myliobatiformes/dasyatidae/himantura-jenkinsii";
import { himanturaKittpongi } from "../../species/rays/myliobatiformes/dasyatidae/himantura-kittpongi";
import { himanturaLeoparda } from "../../species/rays/myliobatiformes/dasyatidae/himantura-leoparda";
import { himanturaLobistoma } from "../../species/rays/myliobatiformes/dasyatidae/himantura-lobistoma";
import { himanturaOxyrhyncha } from "../../species/rays/myliobatiformes/dasyatidae/himantura-oxyrhyncha";
import { himanturaPastinacoides } from "../../species/rays/myliobatiformes/dasyatidae/himantura-pastinacoides";
import { himanturaPolylepis } from "../../species/rays/myliobatiformes/dasyatidae/himantura-polylepis";
import { himanturaSignifer } from "../../species/rays/myliobatiformes/dasyatidae/himantura-signifer";
import { himanturaUarnacoides } from "../../species/rays/myliobatiformes/dasyatidae/himantura-uarnacoides";
import { himanturaUarnak } from "../../species/rays/myliobatiformes/dasyatidae/himantura-uarnak";
import { himanturaUndulata } from "../../species/rays/myliobatiformes/dasyatidae/himantura-undulata";
import { himanturaWalga } from "../../species/rays/myliobatiformes/dasyatidae/himantura-walga";
import { neotrygonKuhlii } from "../../species/rays/myliobatiformes/dasyatidae/neotrygon-kuhlii";
import { neotrygonNingalooensis } from "../../species/rays/myliobatiformes/dasyatidae/neotrygon-ningalooensis";
import { neotrygonPicta } from "../../species/rays/myliobatiformes/dasyatidae/neotrygon-picta";
import { pastinachusAtrus } from "../../species/rays/myliobatiformes/dasyatidae/pastinachus-atrus";
import { pastinachusGracilicaudus } from "../../species/rays/myliobatiformes/dasyatidae/pastinachus-gracilicaudus";
import { pastinachusSephen } from "../../species/rays/myliobatiformes/dasyatidae/pastinachus-sephen";
import { pastinachusSolocirostris } from "../../species/rays/myliobatiformes/dasyatidae/pastinachus-solocirostris";
import { pastinachusStellurostris } from "../../species/rays/myliobatiformes/dasyatidae/pastinachus-stellurostris";
import { pteroplatytrygonViolacea } from "../../species/rays/myliobatiformes/dasyatidae/pteroplatytrygon-violacea";
import { taeniuraGrabata } from "../../species/rays/myliobatiformes/dasyatidae/taeniura-grabata";
import { taeniuraLymma } from "../../species/rays/myliobatiformes/dasyatidae/taeniura-lymma";
import { taeniuraMeyeni } from "../../species/rays/myliobatiformes/dasyatidae/taeniura-meyeni";
import { urogymnusAsperrimus } from "../../species/rays/myliobatiformes/dasyatidae/urogymnus-asperrimus";

export const dasyatidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                dasyatisAmericana,
                                dasyatisLonga
                            ]
                        },
                        {
                            children: [
                                dasyatisBrevis,
                                dasyatisSay
                            ]
                        },
                        dasyatisSabina
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
                                                        dasyatisBrevicaudata,
                                                        pteroplatytrygonViolacea
                                                    ]
                                                },
                                                {
                                                    children: [
                                                        dasyatisCentroura,
                                                        dasyatisUshiei
                                                    ]
                                                }
                                            ]
                                        },
                                        dasyatisZugei
                                    ]
                                },
                                dasyatisChrysonota
                            ]
                        },
                        {
                            children: [
                                taeniuraGrabata,
                                taeniuraMeyeni
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
                        dasyatisMargarita,
                        dasyatisMargeritella
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
                                                                {
                                                                    children: [
                                                                        himanturaAstra,
                                                                        himanturaGerrardi
                                                                    ]
                                                                },
                                                                himanturaPastinacoides
                                                            ]
                                                        },
                                                        {
                                                            children: [
                                                                himanturaLeoparda,
                                                                himanturaUarnak,
                                                                himanturaUndulata
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    children: [
                                                        himanturaFai,
                                                        himanturaJenkinsii
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
                                                                himanturaKittpongi,
                                                                himanturaSignifer
                                                            ]
                                                        },
                                                        himanturaOxyrhyncha
                                                    ]
                                                },
                                                {
                                                    children: [
                                                        himanturaImbricata,
                                                        himanturaWalga
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                himanturaUarnacoides
                            ]
                        },
                        {
                            children: [
                                {
                                    children: [
                                        himanturaGranulata,
                                        {
                                            children: [
                                                himanturaPolylepis,
                                                urogymnusAsperrimus
                                            ]
                                        }
                                    ]
                                },
                                himanturaLobistoma
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
                                neotrygonNingalooensis,
                                {
                                    children: [
                                        neotrygonKuhlii,
                                        neotrygonPicta
                                    ]
                                }
                            ]
                        },
                        taeniuraLymma
                    ]
                },
                {
                    children: [
                        pastinachusAtrus,
                        {
                            children: [
                                {
                                    children: [
                                        pastinachusSephen,
                                        pastinachusGracilicaudus
                                    ]
                                },
                                {
                                    children: [
                                        pastinachusSolocirostris,
                                        pastinachusStellurostris
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}