import { mobulaBirostris } from "../../species/rays/myliobatiformes/mobulidae/mobula-birostris";
import { mobulaHypostoma } from "../../species/rays/myliobatiformes/mobulidae/mobula-hypostoma";
import { mobulaJapanica } from "../../species/rays/myliobatiformes/mobulidae/mobula-japanica";
import { mobulaKuhlii } from "../../species/rays/myliobatiformes/mobulidae/mobula-kuhlii";
import { mobulaMunkiana } from "../../species/rays/myliobatiformes/mobulidae/mobula-munkiana";
import { mobulaThurstoni } from "../../species/rays/myliobatiformes/mobulidae/mobula-thurstoni";

export const mobulidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        mobulaBirostris,
                        mobulaJapanica
                    ]
                },
                {
                    children: [
                        mobulaKuhlii,
                        mobulaThurstoni
                    ]
                }
            ]
        },
        {
            children: [
                mobulaHypostoma,
                mobulaMunkiana
            ]
        }
    ]
}