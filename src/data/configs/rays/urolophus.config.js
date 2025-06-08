import { urolophusCruciatus } from "../../species/rays/myliobatiformes/urolophus/urolophus-cruciatus";
import { urolophusExpansus } from "../../species/rays/myliobatiformes/urolophus/urolophus-expansus";
import { urolophusLobatus } from "../../species/rays/myliobatiformes/urolophus/urolophus-lobatus";
import { urolophusPaucimaculatus } from "../../species/rays/myliobatiformes/urolophus/urolophus-paucimaculatus";
import { urolophusKapalensis } from "../../species/rays/myliobatiformes/urolophus/urolophus-kapalensis";
import { urolophusWestraliensis } from "../../species/rays/myliobatiformes/urolophus/urolophus-westraliensis";
import { urolophusFlavomosaicus } from "../../species/rays/myliobatiformes/urolophus/urolophus-flavomosaicus";
import { urolophusBucculentus } from "../../species/rays/myliobatiformes/urolophus/urolophus-bucculentus";
import { urolophusViridis } from "../../species/rays/myliobatiformes/urolophus/urolophus-viridis";

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