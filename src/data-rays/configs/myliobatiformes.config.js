import { dasyatisMicrops } from "../species/myliobatiformes/dasyatis-microps";
import { hexatrygonBickelii } from "../species/myliobatiformes/hexatrygon-bickelii";
import { himanturaSchmardae } from "../species/myliobatiformes/himantura-schmardae";
import { paratrygonAiereba } from "../species/myliobatiformes/paratrygon-aiereba";
import { plesiobatisDaviesi } from "../species/myliobatiformes/plesiobatis-daveisi";
import { potamotrygonMotoro } from "../species/myliobatiformes/potamotrygon-motoro";
import { trygonopteraImitata } from "../species/myliobatiformes/trygonoptera-imitata";
import { trygonopteraOvalis } from "../species/myliobatiformes/trygonoptera-ovalis";
import { trygonopteraPersonata } from "../species/myliobatiformes/trygonoptera-personata";
import { trygonopteraTestacea } from "../species/myliobatiformes/trygonoptera-testacea";
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