import { urobatisConcentricus } from "../species/myliobatiformes/urotrygonidae/urobatis-concentricus";
import { urobatisHalleri } from "../species/myliobatiformes/urotrygonidae/urobatis-halleri";
import { urobatisJamaicensis } from "../species/myliobatiformes/urotrygonidae/urobatis-jamaicensis";
import { urobatisMaculatus } from "../species/myliobatiformes/urotrygonidae/urobatis-maculatus";
import { urotrygonRogersi } from "../species/myliobatiformes/urotrygonidae/urotrygon-rogersi";
import { urotrygonSimulatrix } from "../species/myliobatiformes/urotrygonidae/urotrygon-simulatrix";

export const urotrygonidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        urobatisConcentricus,
                        urobatisMaculatus
                    ]
                },
                urobatisHalleri
            ]
        },
        {
            children: [
                urobatisJamaicensis,
                {
                    children: [
                        urotrygonSimulatrix,
                        urotrygonRogersi
                    ]
                }
            ]
        }
    ]
}