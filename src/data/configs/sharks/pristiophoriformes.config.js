import { pliotremaWarreni } from "../../species/sharks/pristiophoriformes/pliotrema-warreni";
import { pristiophorusCirratus } from "../../species/sharks/pristiophoriformes/pristiophorus-cirratus";
import { pristiophorusJaponicus } from "../../species/sharks/pristiophoriformes/pristiophorus-japonicus";

export const pristiophoriformesConfig = {
    children: [
        {
            children: [
                pliotremaWarreni,
                pristiophorusJaponicus
            ]
        },
        pristiophorusCirratus
    ]
}
