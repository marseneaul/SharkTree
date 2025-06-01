import { dasyatisMicrops } from "../../species/rays/myliobatiformes/dasyatis-microps";
import { hexatrygonBickelii } from "../../species/rays/myliobatiformes/hexatrygon-bickelii";
import { himanturaSchmardae } from "../../species/rays/myliobatiformes/himantura-schmardae";
import { paratrygonAiereba } from "../../species/rays/myliobatiformes/paratrygon-aiereba";
import { plesiobatisDaviesi } from "../../species/rays/myliobatiformes/plesiobatis-daveisi";
import { potamotrygonMotoro } from "../../species/rays/myliobatiformes/potamotrygon-motoro";
import { trygonopteraImitata } from "../../species/rays/myliobatiformes/trygonoptera-imitata";
import { trygonopteraOvalis } from "../../species/rays/myliobatiformes/trygonoptera-ovalis";
import { trygonopteraPersonata } from "../../species/rays/myliobatiformes/trygonoptera-personata";
import { trygonopteraTestacea } from "../../species/rays/myliobatiformes/trygonoptera-testacea";
import { dasyatidaeConfig } from "./dasyatidae.config";
import { gymnuridaeConfig } from "./gymnuridae.config";
import { mobulidaeConfig } from "./mobulidae.config";
import { myliobatidaeConfig } from "./myliobatidae.config";
import { rhinopteridaeConfig } from "./rhinopteridae.config";
import { urolophusConfig } from "./urolophus.config";
import { urotrygonidaeConfig } from "./urotrygonidea.config";

export const myliobatiformesConfig = {
    children: [
        {
            children: [
                dasyatidaeConfig,
                {
                    children: [
                        {
                            children: [
                                dasyatisMicrops,
                                {
                                    children: [
                                        himanturaSchmardae,
                                        {
                                            children: [
                                                paratrygonAiereba,
                                                potamotrygonMotoro
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        urotrygonidaeConfig
                    ]
                }
            ]
        },
        {
            children: [
                {
                    children: [
                        gymnuridaeConfig,
                        {
                            children: [
                                hexatrygonBickelii,
                                {
                                    children: [
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        trygonopteraImitata,
                                                        trygonopteraTestacea
                                                    ]
                                                },
                                                trygonopteraPersonata
                                            ]
                                        },
                                        trygonopteraOvalis
                                    ]
                                }
                            ]
                        },
                        {
                            children: [
                                plesiobatisDaviesi,
                                urolophusConfig
                            ]
                        },
                    ]
                },
                {
                    children: [
                        {
                            children: [
                                mobulidaeConfig,
                                rhinopteridaeConfig
                            ]
                        },
                        myliobatidaeConfig
                    ]
                }
            ]
        }
    ]
}