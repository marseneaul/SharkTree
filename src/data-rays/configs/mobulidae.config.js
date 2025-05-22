import { mobulaBirostris } from "../species/myliobatiformes/mobulidae/mobula-birostris";
import { mobulaHypostoma } from "../species/myliobatiformes/mobulidae/mobula-hypostoma";
import { mobulaJapanica } from "../species/myliobatiformes/mobulidae/mobula-japanica";
import { mobulaKuhlii } from "../species/myliobatiformes/mobulidae/mobula-kuhlii";
import { mobulaMunkiana } from "../species/myliobatiformes/mobulidae/mobula-munkiana";
import { mobulaThurstoni } from "../species/myliobatiformes/mobulidae/mobula-thurstoni";

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