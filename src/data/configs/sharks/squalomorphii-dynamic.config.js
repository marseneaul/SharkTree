import { speciesDataLoader } from "../../../utils/data-loader";

export const squalomorphiiConfig = async () => {
    // Load the other shark configs dynamically
    const hexanchiformesConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'hexanchiformes');
    const squaliformesConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'squaliformes');
    const echinorhinidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'echinorhinidae');
    const pristiophoriformesConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'pristiophoriformes');
    const squatiniformesConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'squatiniformes');
    
    return {
        children: [
            {
                children: [
                    squaliformesConfig,
                    {
                        children: [
                            echinorhinidaeConfig,
                            {
                                children: [
                                    pristiophoriformesConfig,
                                    squatiniformesConfig
                                ]
                            }
                        ]
                    }
                ]
            },
            hexanchiformesConfig
        ]
    };
};
