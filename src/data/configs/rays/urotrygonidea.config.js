import { urobatisConcentricus } from "../../species/rays/myliobatiformes/urotrygonidae/urobatis-concentricus";
import { urobatisHalleri } from "../../species/rays/myliobatiformes/urotrygonidae/urobatis-halleri";
import { urobatisJamaicensis } from "../../species/rays/myliobatiformes/urotrygonidae/urobatis-jamaicensis";
import { urobatisMaculatus } from "../../species/rays/myliobatiformes/urotrygonidae/urobatis-maculatus";
import { urotrygonRogersi } from "../../species/rays/myliobatiformes/urotrygonidae/urotrygon-rogersi";
import { urotrygonSimulatrix } from "../../species/rays/myliobatiformes/urotrygonidae/urotrygon-simulatrix";

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