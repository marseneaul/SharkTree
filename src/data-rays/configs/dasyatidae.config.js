import { dasyatisAmericana } from "../species/myliobatiformes/dasyatidae/dasyatis-americana";
import { dasyatisBrevicaudata } from "../species/myliobatiformes/dasyatidae/dasyatis-brevicaudata";
import { dasyatisBrevis } from "../species/myliobatiformes/dasyatidae/dasyatis-brevis";
import { dasyatisCentroura } from "../species/myliobatiformes/dasyatidae/dasyatis-centroura";
import { dasyatisChrysonota } from "../species/myliobatiformes/dasyatidae/dasyatis-chrysonota";
import { dasyatisLonga } from "../species/myliobatiformes/dasyatidae/dasyatis-longa";
import { dasyatisMargarita } from "../species/myliobatiformes/dasyatidae/dasyatis-margarita";
import { dasyatisMargeritella } from "../species/myliobatiformes/dasyatidae/dasyatis-margeritella";
import { dasyatisSabina } from "../species/myliobatiformes/dasyatidae/dasyatis-sabina";
import { dasyatisSay } from "../species/myliobatiformes/dasyatidae/dasyatis-say";
import { dasyatisUshiei } from "../species/myliobatiformes/dasyatidae/dasyatis-ushiei";
import { dasyatisZugei } from "../species/myliobatiformes/dasyatidae/dasyatis-zugei";
import { himanturaAstra } from "../species/myliobatiformes/dasyatidae/himantura-astra";
import { himanturaFai } from "../species/myliobatiformes/dasyatidae/himantura-fai";
import { himanturaGerrardi } from "../species/myliobatiformes/dasyatidae/himantura-gerrardi";
import { himanturaGranulata } from "../species/myliobatiformes/dasyatidae/himantura-granulata";
import { himanturaImbricata } from "../species/myliobatiformes/dasyatidae/himantura-imbricata";
import { himanturaJenkinsii } from "../species/myliobatiformes/dasyatidae/himantura-jenkinsii";
import { himanturaKittpongi } from "../species/myliobatiformes/dasyatidae/himantura-kittpongi";
import { himanturaLeoparda } from "../species/myliobatiformes/dasyatidae/himantura-leoparda";
import { himanturaLobistoma } from "../species/myliobatiformes/dasyatidae/himantura-lobistoma";
import { himanturaOxyrhyncha } from "../species/myliobatiformes/dasyatidae/himantura-oxyrhyncha";
import { himanturaPastinacoides } from "../species/myliobatiformes/dasyatidae/himantura-pastinacoides";
import { himanturaPolylepis } from "../species/myliobatiformes/dasyatidae/himantura-polylepis";
import { himanturaSignifer } from "../species/myliobatiformes/dasyatidae/himantura-signifer";
import { himanturaUarnacoides } from "../species/myliobatiformes/dasyatidae/himantura-uarnacoides";
import { himanturaUarnak } from "../species/myliobatiformes/dasyatidae/himantura-uarnak";
import { himanturaUndulata } from "../species/myliobatiformes/dasyatidae/himantura-undulata";
import { himanturaWalga } from "../species/myliobatiformes/dasyatidae/himantura-walga";
import { neotrygonKuhlii } from "../species/myliobatiformes/dasyatidae/neotrygon-kuhlii";
import { neotrygonNingalooensis } from "../species/myliobatiformes/dasyatidae/neotrygon-ningalooensis";
import { neotrygonPicta } from "../species/myliobatiformes/dasyatidae/neotrygon-picta";
import { pastinachusAtrus } from "../species/myliobatiformes/dasyatidae/pastinachus-atrus";
import { pastinachusGracilicaudus } from "../species/myliobatiformes/dasyatidae/pastinachus-gracilicaudus";
import { pastinachusSephen } from "../species/myliobatiformes/dasyatidae/pastinachus-sephen";
import { pastinachusSolocirostris } from "../species/myliobatiformes/dasyatidae/pastinachus-solocirostris";
import { pastinachusStellurostris } from "../species/myliobatiformes/dasyatidae/pastinachus-stellurostris";
import { pteroplatytrygonViolacea } from "../species/myliobatiformes/dasyatidae/pteroplatytrygon-violacea";
import { taeniuraGrabata } from "../species/myliobatiformes/dasyatidae/taeniura-grabata";
import { taeniuraLymma } from "../species/myliobatiformes/dasyatidae/taeniura-lymma";
import { taeniuraMeyeni } from "../species/myliobatiformes/dasyatidae/taeniura-meyeni";
import { urogymnusAsperrimus } from "../species/myliobatiformes/dasyatidae/urogymnus-asperrimus";

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