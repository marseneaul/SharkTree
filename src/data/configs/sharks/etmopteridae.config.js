import { centroscylliumFabricii } from "../../species/sharks/squaliformes/etmopteridae/centroscyllium-fabricii";
import { centroscylliumGranulatum } from "../../species/sharks/squaliformes/etmopteridae/centroscyllium-granulatum";
import { centroscylliumNigrum } from "../../species/sharks/squaliformes/etmopteridae/centroscyllium-nigrum";
import { centroscylliumRitteri } from "../../species/sharks/squaliformes/etmopteridae/centroscyllium-ritteri";
import { etmopterusBaxteri } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-baxteri";
import { etmopterusBigelowi } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-bigelowi";
import { etmopterusBrachyurus } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-brachyurus";
import { etmopterusGracilispinis } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-gracilispinis";
import { etmopterusGranulosus } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-granulosus";
import { etmopterusLucifer } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-lucifer";
import { etmopterusMolleri } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-molleri";
import { etmopterusPolli } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-polli";
import { etmopterusPrinceps } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-princeps";
import { etmopterusPusillus } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-pusillus";
import { etmopterusSchultzi } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-schultzi";
import { etmopterusSentosus } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-sentosus";
import { etmopterusSpinax } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-spinax";
import { etmopterusSplendidus } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-splendidus";
import { etmopterusUnicolor } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-unicolor";
import { etmopterusViator } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-viator";
import { etmopterusVirens } from "../../species/sharks/squaliformes/etmopteridae/etmopterus-virens";
import { miroscylliumSheikoi } from "../../species/sharks/squaliformes/etmopteridae/miroscyllium-sheikoi";
import { trigonognathusKabeyai } from "../../species/sharks/squaliformes/etmopteridae/trigonognathus-kabeyai";

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