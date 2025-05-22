import { hexatrygonBickelii } from "../species/myliobatiformes/hexatrygon-bickelii";
import { plesiobatisDaviesi } from "../species/myliobatiformes/plesiobatis-daveisi";
import { dasyatidaeConfig } from "./dasyatidae.config";
import { gymnuridaeConfig } from "./gymnuridae.config";
import { mobulidaeConfig } from "./mobulidae.config";
import { myliobatidaeConfig } from "./myliobatidae.config";
import { rhinopteridaeConfig } from "./rhinopteridae.config";
import { urolophidaeConfig } from "./urolophidae.config";

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
                                urolophidaeConfig
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