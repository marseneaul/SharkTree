import { hexanchusGriseus } from "../../species/sharks/hexanchiformes/hexanchus-griseus";
import { hexanchusVitulus } from "../../species/sharks/hexanchiformes/hexanchus-vitulus";
import { hexanchusNakamurai } from "../../species/sharks/hexanchiformes/hexanchus-nakamurai";
import { heptranchiasPerlo } from "../../species/sharks/hexanchiformes/heptranchias-perlo";
import { chlamydoselachusAnguineus } from "../../species/sharks/hexanchiformes/chlamydoselachus-anguineus";
import { notorhynchusCepedianus } from "../../species/sharks/hexanchiformes/notorynchus-cepedianus";

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
