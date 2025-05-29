import { urolophusCruciatus } from "../species/myliobatiformes/urolophus/urolophus-cruciatus";
import { urolophusExpansus } from "../species/myliobatiformes/urolophus/urolophus-expansus";
import { urolophusLobatus } from "../species/myliobatiformes/urolophus/urolophus-lobatus";
import { urolophusPaucimaculatus } from "../species/myliobatiformes/urolophus/urolophus-paucimaculatus";
import { urolophusKapalensis, urolophusViridis } from "../species/myliobatiformes/urolophus/urolophus-kapalensis";
import { urolophusWestraliensis } from "../species/myliobatiformes/urolophus/urolophus-westraliensis";
import { urolophusFlavomosaicus } from "../species/myliobatiformes/urolophus/urolophus-flavomosaicus";
import { urolophusBucculentus } from "../species/myliobatiformes/urolophus/urolophus-bucculentus";

export const urolophusConfig = {
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