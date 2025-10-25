import { speciesDataLoader } from "../../../utils/data-loader";

export const somniosidaeOxynotidaeConfig = async () => {
    // Load all species data dynamically
    const centroscymnusCoelolepis = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/centroscymnus-coelolepis');
    const centroscymnusOwstonii = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/centroscymnus-owstonii');
    const centroselachusCrepidater = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/centroselachus-crepidater');
    const oxynotusBruniensis = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/oxynotus-bruniensis');
    const oxynotusParadoxus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/oxynotus-paradoxus');
    const proscymnodonPlunketi = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/proscymnodon-plunketi');
    const scymnodonRingens = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/scymnodon-ringens');
    const somniosusMicrocephalus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/somniosus-microcephalus');
    const somniosusPacificus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/somniosus-pacificus');
    const somniosusRostratus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/somniosus-rostratus');
    const zameusSquamulosus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/somniosidae-oxynotidae/zameus-squamulosus');
    
    return {
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
    };
};
