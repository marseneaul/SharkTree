import { urolophusCruciatus } from "../species/myliobatiformes/urolophidae/urolophus-cruciatus";
import { urolophusExpansus } from "../species/myliobatiformes/urolophidae/urolophus-expansus";
import { urolophusLobatus } from "../species/myliobatiformes/urolophidae/urolophus-lobatus";
import { urolophusPaucimaculatus } from "../species/myliobatiformes/urolophidae/urolophus-paucimaculatus";
import { urolophusKapalensis, urolophusViridis } from "../species/myliobatiformes/urolophidae/urolophus-kapalensis";
import { urolophusWestraliensis } from "../species/myliobatiformes/urolophidae/urolophus-westraliensis";
import { urolophusFlavomosaicus } from "../species/myliobatiformes/urolophidae/urolophus-flavomosaicus";
import { urolophusBucculentus } from "../species/myliobatiformes/urolophidae/urolophus-bucculentus";

export const urolophidaeConfig = {
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
                                                urolophusBucculentus,
                                                urolophusFlavomosaicus
                                            ]
                                        },
                                        urolophusWestraliensis
                                    ]
                                },
                                urolophusKapalensis
                            ]
                        },
                        {
                            children: [
                                urolophusCruciatus,
                                urolophusLobatus
                            ]
                        }
                    ]
                },
                urolophusPaucimaculatus
            ]
        },
        {
            children: [
                urolophusExpansus,
                urolophusViridis
            ]
        }
    ]
}