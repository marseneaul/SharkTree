import { centroscymnusCoelolepis } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/centroscymnus-coelolepis";
import { centroscymnusOwstonii } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/centroscymnus-owstonii";
import { centroselachusCrepidater } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/centroselachus-crepidater";
import { oxynotusBruniensis } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/oxynotus-bruniensis";
import { oxynotusParadoxus } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/oxynotus-paradoxus";
import { proscymnodonPlunketi } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/proscymnodon-plunketi";
import { scymnodonRingens } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/scymnodon-ringens";
import { somniosusMicrocephalus } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/somniosus-microcephalus";
import { somniosusPacificus } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/somniosus-pacificus";
import { somniosusRostratus } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/somniosus-rostratus";
import { zameusSquamulosus } from "../../species/sharks/squaliformes/somniosidae-oxynotidae/zameus-squamulosus";

export const somniosidaeOxynotidaeConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        {
                            children: [
                                {
                                    children: [
                                        centroscymnusOwstonii,
                                        { 
                                            children: [
                                                oxynotusBruniensis,
                                                oxynotusParadoxus
                                            ]
                                        }
                                    ]
                                },
                                {
                                    children: [
                                        proscymnodonPlunketi,
                                        scymnodonRingens
                                    ]
                                }
                            ]
                        },
                        centroscymnusCoelolepis
                    ]
                },
                {
                    children: [
                        centroselachusCrepidater,
                        zameusSquamulosus
                    ]
                }
            ]
        },
        {
            children: [
                {
                    children: [
                        somniosusMicrocephalus,
                        somniosusPacificus
                    ]
                },
                somniosusRostratus 
            ]
        }
    ]
}