import { centroscylliumFabricii } from "../species/squaliformes/etmopteridae/centroscyllium-fabricii";
import { centroscylliumGranulatum } from "../species/squaliformes/etmopteridae/centroscyllium-granulatum";
import { centroscylliumNigrum } from "../species/squaliformes/etmopteridae/centroscyllium-nigrum";
import { centroscylliumRitteri } from "../species/squaliformes/etmopteridae/centroscyllium-ritteri";
import { etmopterusBaxteri } from "../species/squaliformes/etmopteridae/etmopterus-baxteri";
import { etmopterusBigelowi } from "../species/squaliformes/etmopteridae/etmopterus-bigelowi";
import { etmopterusBrachyurus } from "../species/squaliformes/etmopteridae/etmopterus-brachyurus";
import { etmopterusGracilispinis } from "../species/squaliformes/etmopteridae/etmopterus-gracilispinis";
import { etmopterusGranulosus } from "../species/squaliformes/etmopteridae/etmopterus-granulosus";
import { etmopterusLucifer } from "../species/squaliformes/etmopteridae/etmopterus-lucifer";
import { etmopterusMolleri } from "../species/squaliformes/etmopteridae/etmopterus-molleri";
import { etmopterusPolli } from "../species/squaliformes/etmopteridae/etmopterus-polli";
import { etmopterusPrinceps } from "../species/squaliformes/etmopteridae/etmopterus-princeps";
import { etmopterusPusillus } from "../species/squaliformes/etmopteridae/etmopterus-pusillus";
import { etmopterusSchultzi } from "../species/squaliformes/etmopteridae/etmopterus-schultzi";
import { etmopterusSentosus } from "../species/squaliformes/etmopteridae/etmopterus-sentosus";
import { etmopterusSpinax } from "../species/squaliformes/etmopteridae/etmopterus-spinax";
import { etmopterusSplendidus } from "../species/squaliformes/etmopteridae/etmopterus-splendidus";
import { etmopterusUnicolor } from "../species/squaliformes/etmopteridae/etmopterus-unicolor";
import { etmopterusViator } from "../species/squaliformes/etmopteridae/etmopterus-viator";
import { etmopterusVirens } from "../species/squaliformes/etmopteridae/etmopterus-virens";
import { miroscylliumSheikoi } from "../species/squaliformes/etmopteridae/miroscyllium-sheikoi";
import { trigonognathusKabeyai } from "../species/squaliformes/etmopteridae/trigonognathus-kabeyai";

export const etmopteridaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                centroscylliumFabricii,
                                centroscylliumRitteri
                            ]
                        },
                        {
                            children: [
                                centroscylliumGranulatum,
                                centroscylliumNigrum
                            ]
                        },
                    ]
                },
                trigonognathusKabeyai
            ]
        },
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        {
                                            children: [
                                                etmopterusBaxteri,
                                                etmopterusGranulosus
                                            ]
                                        },
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        etmopterusViator,
                                                        {
                                                            children: [
                                                                etmopterusSpinax,
                                                                etmopterusPrinceps
                                                            ]
                                                        }
                                                    ]
                                                },
                                                etmopterusUnicolor
                                            ]
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        etmopterusGracilispinis,
                                        {
                                            children: [
                                                {
                                                    children: [
                                                        etmopterusVirens,
                                                        etmopterusPolli 
                                                    ]
                                                },
                                                etmopterusSchultzi
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            children: [
                                {
                                    children: [
                                        etmopterusBigelowi,
                                        etmopterusPusillus
                                    ]
                                },
                                {
                                    children: [
                                        etmopterusSplendidus,
                                        etmopterusSentosus
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    children: [
                        etmopterusLucifer,
                        {
                            children: [
                                {
                                    children: [
                                        etmopterusMolleri,
                                        etmopterusBrachyurus
                                    ]
                                },
                                miroscylliumSheikoi
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}