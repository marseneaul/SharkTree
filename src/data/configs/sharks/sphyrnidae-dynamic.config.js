import { speciesDataLoader } from "../../../utils/data-loader";

export const sphyrnidaeConfig = async () => {
    // Load all species data dynamically
    const sphyrnaLewini = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/sphyrnidae/sphyrna-lewini');
    const sphyrnaZygaena = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/sphyrnidae/sphyrna-zygaena');
    const sphyrnaMokarran = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/sphyrnidae/sphyrna-mokarran');
    const sphyrnaTiburo = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/sphyrnidae/sphyrna-tiburo');
    const sphyrnaTudes = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/sphyrnidae/sphyrna-tudes');
    const sphyrnaCorona = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/sphyrnidae/sphyrna-corona');
    
    return {
        children: [
            sphyrnaMokarran,
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    sphyrnaTiburo,
                                    sphyrnaTudes
                                ]
                            },
                            sphyrnaCorona
                        ]
                    },
                    sphyrnaLewini
                ]
            },
            sphyrnaZygaena
        ]
    };
};
