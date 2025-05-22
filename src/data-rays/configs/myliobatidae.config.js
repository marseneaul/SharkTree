import { aetobatusFlagellum } from "../species/myliobatiformes/myliobatidae/aetobatus-flagellum";
import { aetobatusLaticeps } from "../species/myliobatiformes/myliobatidae/aetobatus-laticeps";
import { aetobatusNarinari } from "../species/myliobatiformes/myliobatidae/aetobatus-narinari";
import { aetobatusOcellatus } from "../species/myliobatiformes/myliobatidae/aetobatus-ocellatus";
import { aetomylaeusMaculatus } from "../species/myliobatiformes/myliobatidae/aetomylaeus-maculatus";
import { aetomylaeusMilvus } from "../species/myliobatiformes/myliobatidae/aetomylaeus-milvus";
import { aetomylaeusNichofii } from "../species/myliobatiformes/myliobatidae/aetomylaeus-nichofii";
import { aetomylaeusVespertilio } from "../species/myliobatiformes/myliobatidae/aetomylaeus-vespertilio";
import { myliobatisAquila } from "../species/myliobatiformes/myliobatidae/myliobatis-aquila";
import { myliobatisCalifornica } from "../species/myliobatiformes/myliobatidae/myliobatis-californica";
import { myliobatisFreminvillei } from "../species/myliobatiformes/myliobatidae/myliobatis-freminvillei";
import { myliobatisLongirostris } from "../species/myliobatiformes/myliobatidae/myliobatis-longirostris";
import { myliobatisTobjei } from "../species/myliobatiformes/myliobatidae/myliobatis-tobjei";
import { mylliobatisAustralis } from "../species/myliobatiformes/myliobatidae/mylliobatis-australis copy 11";
import { pteromylaeusBovinus } from "../species/myliobatiformes/myliobatidae/pteromylaeus-bovinus";

export const myliobatidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        aetomylaeusNichofii,
                                        {
                                            children: [
                                                aetomylaeusMaculatus,
                                                aetomylaeusMilvus
                                            ]
                                        }
                                    ]
                                },
                                pteromylaeusBovinus
                            ]
                        },
                        aetomylaeusVespertilio
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
                                                myliobatisAquila,
                                                myliobatisTobjei
                                            ]
                                        },
                                        {
                                            children: [
                                                myliobatisFreminvillei,
                                                myliobatisLongirostris
                                            ]
                                        }
                                    ]
                                },
                                myliobatisCalifornica
                            ]
                        },
                        mylliobatisAustralis
                    ]
                }
            ]
        },
        {
            children: [
                aetobatusFlagellum,
                {
                    children: [
                        {
                            children: [
                                aetobatusLaticeps,
                                aetobatusNarinari
                            ]
                        },
                        aetobatusOcellatus
                    ]
                },
            ]
        }
    ]
}