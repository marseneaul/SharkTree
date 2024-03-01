import { hexanchusGriseus } from "../species/hexanchiformes/hexanchus-griseus";
import { hexanchusVitulus } from "../species/hexanchiformes/hexanchus-vitulus";
import { hexanchusNakamurai } from "../species/hexanchiformes/hexanchus-nakamurai";
import { heptranchiasPerlo } from "../species/hexanchiformes/heptranchias-perlo";
import { chlamydoselachusAnguineus } from "../species/hexanchiformes/chlamydoselachus-anguineus";
import { notorhynchusCepedianus } from "../species/hexanchiformes/notorynchus-cepedianus";

export const hexanchiformesConfig = {
    children: [
        chlamydoselachusAnguineus,
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                heptranchiasPerlo,
                                hexanchusGriseus
                            ]
                        },
                        {
                            children: [
                                hexanchusNakamurai,
                                hexanchusVitulus
                            ]
                        }
                    ]
                },
                notorhynchusCepedianus
            ]
        }
    ]
}
