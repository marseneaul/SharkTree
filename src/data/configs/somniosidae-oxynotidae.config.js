import { centroscymnusCoelolepis } from "../species/squaliformes/somniosidae-oxynotidae/centroscymnus-coelolepis";
import { centroscymnusOwstonii } from "../species/squaliformes/somniosidae-oxynotidae/centroscymnus-owstonii";
import { centroselachusCrepidater } from "../species/squaliformes/somniosidae-oxynotidae/centroselachus-crepidater";
import { oxynotusBruniensis } from "../species/squaliformes/somniosidae-oxynotidae/oxynotus-bruniensis";
import { oxynotusParadoxus } from "../species/squaliformes/somniosidae-oxynotidae/oxynotus-paradoxus";
import { proscymnodonPlunketi } from "../species/squaliformes/somniosidae-oxynotidae/proscymnodon-plunketi";
import { scymnodonRingens } from "../species/squaliformes/somniosidae-oxynotidae/scymnodon-ringens";
import { somniosusMicrocephalus } from "../species/squaliformes/somniosidae-oxynotidae/somniosus-microcephalus";
import { somniosusPacificus } from "../species/squaliformes/somniosidae-oxynotidae/somniosus-pacificus";
import { somniosusRostratus } from "../species/squaliformes/somniosidae-oxynotidae/somniosus-rostratus";
import { zameusSquamulosus } from "../species/squaliformes/somniosidae-oxynotidae/zameus-squamulosus";

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