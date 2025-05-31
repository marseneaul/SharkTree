import { arhynchobatisAsperrimus } from "../species/rajiformes/arhynchobatidae/arhynchobatis-asperrimus";
import { atlantorajaCastelnaui } from "../species/rajiformes/arhynchobatidae/atlantoraja-castelnaui";
import { atlantorajaCyclophora } from "../species/rajiformes/arhynchobatidae/atlantoraja-cyclophora";
import { atlantorajaPlatana } from "../species/rajiformes/arhynchobatidae/atlantoraja-platana";
import { bathyrajaAleutica } from "../species/rajiformes/arhynchobatidae/bathyraja-aleutica";
import { bathyrajaBergi } from "../species/rajiformes/arhynchobatidae/bathyraja-bergi";
import { bathyrajaBrachyurops } from "../species/rajiformes/arhynchobatidae/bathyraja-brachyurops";
import { bathyrajaGriseocauda } from "../species/rajiformes/arhynchobatidae/bathyraja-griseocauda";
import { bathyrajaInterrupta } from "../species/rajiformes/arhynchobatidae/bathyraja-interrupta";
import { bathyrajaKincaidi } from "../species/rajiformes/arhynchobatidae/bathyraja-kincaidi";
import { bathyrajaMaculata } from "../species/rajiformes/arhynchobatidae/bathyraja-maculata";
import { bathyrajaMariposa } from "../species/rajiformes/arhynchobatidae/bathyraja-mariposa";
import { bathyrajaMinispinosa } from "../species/rajiformes/arhynchobatidae/bathyraja-minispinosa";
import { bathyrajaPallida } from "../species/rajiformes/arhynchobatidae/bathyraja-pallida";
import { bathyrajaParmifera } from "../species/rajiformes/arhynchobatidae/bathyraja-parmifera";
import { bathyrajaScaphiops } from "../species/rajiformes/arhynchobatidae/bathyraja-scaphiops";
import { bathyrajaShuntovi } from "../species/rajiformes/arhynchobatidae/bathyraja-shuntovi";
import { bathyrajaSmirnovi } from "../species/rajiformes/arhynchobatidae/bathyraja-smirnovi";
import { bathyrajaTaranetzi } from "../species/rajiformes/arhynchobatidae/bathyraja-taranetzi";
import { bathyrajaTrachura } from "../species/rajiformes/arhynchobatidae/bathyraja-trachura";
import { bathyrajaViolacea } from "../species/rajiformes/arhynchobatidae/bathyraja-violacea";
import { brochirajaAlbilabiata } from "../species/rajiformes/arhynchobatidae/brochiraja-albilabiata";
import { brochirajaAsperula } from "../species/rajiformes/arhynchobatidae/brochiraja-asperula";
import { brochirajaLeviveneta } from "../species/rajiformes/arhynchobatidae/brochiraja-leviveneta";
import { brochirajaMicrospinifera } from "../species/rajiformes/arhynchobatidae/brochiraja-microspinifera";
import { brochirajaSpinifera } from "../species/rajiformes/arhynchobatidae/brochiraja-spinifera";
import { insentirajaSubtilispinosa } from "../species/rajiformes/arhynchobatidae/insentiraja-subtilispinosa";
import { irolitaWaitii } from "../species/rajiformes/arhynchobatidae/irolita-waitii";
import { notorajaAzurea } from "../species/rajiformes/arhynchobatidae/notoraja-azurea";
import { pavorajaAlleni } from "../species/rajiformes/arhynchobatidae/pavoraja-alleni";
import { pavorajaNitida } from "../species/rajiformes/arhynchobatidae/pavoraja-nitida";
import { rhinorajaAlbomaculata } from "../species/rajiformes/arhynchobatidae/rhinoraja-albomaculata";
import { rhinorajaMacloviana } from "../species/rajiformes/arhynchobatidae/rhinoraja-macloviana";
import { rhinorajaMagellanica } from "../species/rajiformes/arhynchobatidae/rhinoraja-magellanica";
import { rhinorajaMultispinis } from "../species/rajiformes/arhynchobatidae/rhinoraja-multispinis";
import { rhinorajaTaranetzi } from "../species/rajiformes/arhynchobatidae/rhinoraja-taranetzi";
import { riorajaAgassizii } from "../species/rajiformes/arhynchobatidae/rioraja-agassizii";
import { sympterygiaAcuta } from "../species/rajiformes/arhynchobatidae/sympterygia-acuta";
import { sympterygiaBonapartii } from "../species/rajiformes/arhynchobatidae/sympterygia-bonapartii";

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