import { anoxypristisCuspidata } from "../species/torpediniformes/anoxypristis-cuspidata";
import { aptychotremaRostrata } from "../species/torpediniformes/aptychotrema-rostrata";
import { aptychotremaVincentiana } from "../species/torpediniformes/aptychotrema-vincentiana";
import { glaucostegusThouin } from "../species/torpediniformes/glaucostegus-thouin";
import { glaucostegusTypus } from "../species/torpediniformes/glaucostegus-typus";
import { pristisClavata } from "../species/torpediniformes/pristis-clavata";
import { pristisPectinata } from "../species/torpediniformes/pristis-pectinata";
import { pristisPristis } from "../species/torpediniformes/pristis-pristis";
import { pristisZijsron } from "../species/torpediniformes/pristis-zijsron";
import { rhinaAncylostoma } from "../species/torpediniformes/rhina-ancylostoma";
import { rhinobatosAnnulatus } from "../species/torpediniformes/rhinobatos-annulatus";
import { rhinobatosCemiculus } from "../species/torpediniformes/rhinobatos-cemiculus";
import { rhinobatosFormosensis } from "../species/torpediniformes/rhinobatos-formosensis";
import { rhinobatosGlaucostigma } from "../species/torpediniformes/rhinobatos-glaucostigma";
import { rhinobatosProductus } from "../species/torpediniformes/rhinobatos-productus";
import { rhinobatosRhinobatos } from "../species/torpediniformes/rhinobatos-rhinobatos";
import { rhinobatosSchlegelii } from "../species/torpediniformes/rhinobatos-schlegelii";
import { rhynchobatusAustraliae } from "../species/torpediniformes/rhynchobatus-australiae";
import { rhynchobatusLaevis } from "../species/torpediniformes/rhynchobatus-laevis";
import { rhynchobatusPalpebratus } from "../species/torpediniformes/rhynchobatus-palpebratus";
import { trygonorrhinaDumerilii } from "../species/torpediniformes/trygonorrhina-dumerilii";
import { zanobatusSchoenleinii } from "../species/torpediniformes/zanobatus-schoenleinii";
import { zapteryxExasperata } from "../species/torpediniformes/zapteryx-exasperata";

export const rhinopristiformesConfig = {
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
                                                        anoxypristisCuspidata,
                                                        {
                                                            children: [
                                                                {
                                                                    children: [
                                                                        glaucostegusTypus,
                                                                        glaucostegusThouin
                                                                    ]
                                                                },
                                                                rhinobatosCemiculus
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                pristisClavata,
                                                                {
                                                                    children: [
                                                                        pristisPectinata,
                                                                        pristisZijsron
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        pristisPristis
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            children: [
                                                rhinaAncylostoma,
                                                {
                                                    children: [
                                                        rhynchobatusAustraliae,
                                                        {
                                                            children: [
                                                                rhynchobatusLaevis,
                                                                rhynchobatusPalpebratus
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        rhinobatosGlaucostigma,
                                        rhinobatosProductus
                                    ]
                                }
                            ]
                        },
                        {
                            children: [
                                {
                                    children: [
                                        rhinobatosAnnulatus,
                                        rhinobatosRhinobatos
                                    ]
                                },
                                {
                                    children: [
                                        rhinobatosSchlegelii,
                                        rhinobatosFormosensis
                                    ]
                                }
                            ]
                        }
                    ]
                },
                zanobatusSchoenleinii
            ]
        },
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                aptychotremaRostrata,
                                aptychotremaVincentiana
                            ]
                        },
                        zapteryxExasperata
                    ]
                },
                trygonorrhinaDumerilii
            ]
        }
    ]
}