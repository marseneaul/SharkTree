import { aetobatusFlagellum } from "../../species/rays/myliobatiformes/myliobatidae/aetobatus-flagellum";
import { aetobatusLaticeps } from "../../species/rays/myliobatiformes/myliobatidae/aetobatus-laticeps";
import { aetobatusNarinari } from "../../species/rays/myliobatiformes/myliobatidae/aetobatus-narinari";
import { aetobatusOcellatus } from "../../species/rays/myliobatiformes/myliobatidae/aetobatus-ocellatus";
import { aetomylaeusMaculatus } from "../../species/rays/myliobatiformes/myliobatidae/aetomylaeus-maculatus";
import { aetomylaeusMilvus } from "../../species/rays/myliobatiformes/myliobatidae/aetomylaeus-milvus";
import { aetomylaeusNichofii } from "../../species/rays/myliobatiformes/myliobatidae/aetomylaeus-nichofii";
import { aetomylaeusVespertilio } from "../../species/rays/myliobatiformes/myliobatidae/aetomylaeus-vespertilio";
import { myliobatisAquila } from "../../species/rays/myliobatiformes/myliobatidae/myliobatis-aquila";
import { myliobatisCalifornica } from "../../species/rays/myliobatiformes/myliobatidae/myliobatis-californica";
import { myliobatisFreminvillei } from "../../species/rays/myliobatiformes/myliobatidae/myliobatis-freminvillei";
import { myliobatisLongirostris } from "../../species/rays/myliobatiformes/myliobatidae/myliobatis-longirostris";
import { myliobatisTobjei } from "../../species/rays/myliobatiformes/myliobatidae/myliobatis-tobjei";
import { myliobatisAustralis } from "../../species/rays/myliobatiformes/myliobatidae/myliobatis-australis";
import { pteromylaeusBovinus } from "../../species/rays/myliobatiformes/myliobatidae/pteromylaeus-bovinus";

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
                        myliobatisAustralis
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