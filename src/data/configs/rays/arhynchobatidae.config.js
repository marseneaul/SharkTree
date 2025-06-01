import { arhynchobatisAsperrimus } from "../../species/rays/rajiformes/arhynchobatidae/arhynchobatis-asperrimus";
import { atlantorajaCastelnaui } from "../../species/rays/rajiformes/arhynchobatidae/atlantoraja-castelnaui";
import { atlantorajaCyclophora } from "../../species/rays/rajiformes/arhynchobatidae/atlantoraja-cyclophora";
import { atlantorajaPlatana } from "../../species/rays/rajiformes/arhynchobatidae/atlantoraja-platana";
import { bathyrajaAleutica } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-aleutica";
import { bathyrajaBergi } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-bergi";
import { bathyrajaBrachyurops } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-brachyurops";
import { bathyrajaGriseocauda } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-griseocauda";
import { bathyrajaInterrupta } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-interrupta";
import { bathyrajaKincaidi } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-kincaidi";
import { bathyrajaMaculata } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-maculata";
import { bathyrajaMariposa } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-mariposa";
import { bathyrajaMinispinosa } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-minispinosa";
import { bathyrajaPallida } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-pallida";
import { bathyrajaParmifera } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-parmifera";
import { bathyrajaScaphiops } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-scaphiops";
import { bathyrajaShuntovi } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-shuntovi";
import { bathyrajaSmirnovi } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-smirnovi";
import { bathyrajaTaranetzi } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-taranetzi";
import { bathyrajaTrachura } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-trachura";
import { bathyrajaViolacea } from "../../species/rays/rajiformes/arhynchobatidae/bathyraja-violacea";
import { brochirajaAlbilabiata } from "../../species/rays/rajiformes/arhynchobatidae/brochiraja-albilabiata";
import { brochirajaAsperula } from "../../species/rays/rajiformes/arhynchobatidae/brochiraja-asperula";
import { brochirajaLeviveneta } from "../../species/rays/rajiformes/arhynchobatidae/brochiraja-leviveneta";
import { brochirajaMicrospinifera } from "../../species/rays/rajiformes/arhynchobatidae/brochiraja-microspinifera";
import { brochirajaSpinifera } from "../../species/rays/rajiformes/arhynchobatidae/brochiraja-spinifera";
import { insentirajaSubtilispinosa } from "../../species/rays/rajiformes/arhynchobatidae/insentiraja-subtilispinosa";
import { irolitaWaitii } from "../../species/rays/rajiformes/arhynchobatidae/irolita-waitii";
import { notorajaAzurea } from "../../species/rays/rajiformes/arhynchobatidae/notoraja-azurea";
import { pavorajaAlleni } from "../../species/rays/rajiformes/arhynchobatidae/pavoraja-alleni";
import { pavorajaNitida } from "../../species/rays/rajiformes/arhynchobatidae/pavoraja-nitida";
import { rhinorajaAlbomaculata } from "../../species/rays/rajiformes/arhynchobatidae/rhinoraja-albomaculata";
import { rhinorajaMacloviana } from "../../species/rays/rajiformes/arhynchobatidae/rhinoraja-macloviana";
import { rhinorajaMagellanica } from "../../species/rays/rajiformes/arhynchobatidae/rhinoraja-magellanica";
import { rhinorajaMultispinis } from "../../species/rays/rajiformes/arhynchobatidae/rhinoraja-multispinis";
import { rhinorajaTaranetzi } from "../../species/rays/rajiformes/arhynchobatidae/rhinoraja-taranetzi";
import { riorajaAgassizii } from "../../species/rays/rajiformes/arhynchobatidae/rioraja-agassizii";
import { sympterygiaAcuta } from "../../species/rays/rajiformes/arhynchobatidae/sympterygia-acuta";
import { sympterygiaBonapartii } from "../../species/rays/rajiformes/arhynchobatidae/sympterygia-bonapartii";

export const arhynchobatidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        arhynchobatisAsperrimus,
                        {
                            children: [
                                sympterygiaAcuta,
                                sympterygiaBonapartii
                            ]
                        }
                    ]
                },
                {
                    children: [
                        {
                            children: [
                                atlantorajaCastelnaui,
                                {
                                    children: [
                                        atlantorajaCyclophora,
                                        atlantorajaPlatana
                                    ]
                                }
                            ]
                        },
                        riorajaAgassizii
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
                                                        {
                                                            children: [
                                                                {
                                                                    children: [
                                                                        {
                                                                            children: [
                                                                                {
                                                                                    children: [
                                                                                        bathyrajaAleutica,
                                                                                        bathyrajaInterrupta,
                                                                                        bathyrajaKincaidi,
                                                                                        bathyrajaViolacea
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    children: [
                                                                                        bathyrajaMariposa,
                                                                                        bathyrajaTaranetzi
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        bathyrajaMinispinosa
                                                                    ]
                                                                },
                                                                {
                                                                    children: [
                                                                        bathyrajaBergi,
                                                                        {
                                                                            children: [
                                                                                bathyrajaParmifera,
                                                                                bathyrajaSmirnovi
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
                                                                        {
                                                                            children: [
                                                                                bathyrajaBrachyurops,
                                                                                rhinorajaMagellanica
                                                                            ]
                                                                        },
                                                                        {
                                                                            children: [
                                                                                rhinorajaAlbomaculata,
                                                                                rhinorajaMacloviana
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                bathyrajaGriseocauda
                                                            ]
                                                        },
                                                        bathyrajaAleutica,
                                                        {
                                                            children: [
                                                                bathyrajaPallida,
                                                                bathyrajaScaphiops
                                                            ]
                                                        },
                                                        rhinorajaTaranetzi
                                                    ]
                                                },
                                                bathyrajaMaculata
                                            ]
                                        },
                                        bathyrajaShuntovi,
                                        bathyrajaTrachura
                                        
                                    ]
                                },
                                rhinorajaMultispinis
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
                                                                brochirajaAlbilabiata,
                                                                {
                                                                    children: [
                                                                        brochirajaAsperula,
                                                                        brochirajaSpinifera
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        brochirajaLeviveneta
                                                    ]
                                                },
                                                brochirajaMicrospinifera
                                            ]
                                        },
                                        {
                                            children: [
                                                pavorajaAlleni,
                                                pavorajaNitida
                                            ]
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        insentirajaSubtilispinosa,
                                        notorajaAzurea
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        irolitaWaitii
    ]
}