import { anoxypristisCuspidata } from "../../species/rays/rhinopristiformes/anoxypristis-cuspidata";
import { aptychotremaRostrata } from "../../species/rays/rhinopristiformes/aptychotrema-rostrata";
import { aptychotremaVincentiana } from "../../species/rays/rhinopristiformes/aptychotrema-vincentiana";
import { glaucostegusThouin } from "../../species/rays/rhinopristiformes/glaucostegus-thouin";
import { glaucostegusTypus } from "../../species/rays/rhinopristiformes/glaucostegus-typus";
import { pristisClavata } from "../../species/rays/rhinopristiformes/pristis-clavata";
import { pristisPectinata } from "../../species/rays/rhinopristiformes/pristis-pectinata";
import { pristisPristis } from "../../species/rays/rhinopristiformes/pristis-pristis";
import { pristisZijsron } from "../../species/rays/rhinopristiformes/pristis-zijsron";
import { rhinaAncylostoma } from "../../species/rays/rhinopristiformes/rhina-ancylostoma";
import { rhinobatosAnnulatus } from "../../species/rays/rhinopristiformes/rhinobatos-annulatus";
import { rhinobatosCemiculus } from "../../species/rays/rhinopristiformes/rhinobatos-cemiculus";
import { rhinobatosFormosensis } from "../../species/rays/rhinopristiformes/rhinobatos-formosensis";
import { rhinobatosGlaucostigma } from "../../species/rays/rhinopristiformes/rhinobatos-glaucostigma";
import { rhinobatosProductus } from "../../species/rays/rhinopristiformes/rhinobatos-productus";
import { rhinobatosRhinobatos } from "../../species/rays/rhinopristiformes/rhinobatos-rhinobatos";
import { rhinobatosSchlegelii } from "../../species/rays/rhinopristiformes/rhinobatos-schlegelii";
import { rhynchobatusAustraliae } from "../../species/rays/rhinopristiformes/rhynchobatus-australiae";
import { rhynchobatusLaevis } from "../../species/rays/rhinopristiformes/rhynchobatus-laevis";
import { rhynchobatusPalpebratus } from "../../species/rays/rhinopristiformes/rhynchobatus-palpebratus";
import { trygonorrhinaDumerilii } from "../../species/rays/rhinopristiformes/trygonorrhina-dumerilii";
import { zanobatusSchoenleinii } from "../../species/rays/rhinopristiformes/zanobatus-schoenleinii";
import { zapteryxExasperata } from "../../species/rays/rhinopristiformes/zapteryx-exasperata";

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