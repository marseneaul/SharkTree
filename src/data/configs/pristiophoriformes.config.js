import { pliotremaWarreni } from "../species/pristiophoriformes/pliotrema-warreni";
import { pristiophorusCirratus } from "../species/pristiophoriformes/pristiophorus-cirratus";
import { pristiophorusJaponicus } from "../species/pristiophoriformes/pristiophorus-japonicus";

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
