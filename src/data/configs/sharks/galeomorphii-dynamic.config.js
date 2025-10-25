import { speciesDataLoader } from "../../../utils/data-loader";

export const galeomorphiiConfig = async () => {
    // Load the other shark configs dynamically
    const orectolobiformesConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'orectolobiformes');
    const lamniformesConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'lamniformes');
    const carcharhiniformesConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'carcharhiniformes');
    const heterodontiformesConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'heterodontiformes');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            lamniformesConfig,
                            carcharhiniformesConfig
                        ]
                    },
                    orectolobiformesConfig
                ]
            },
            heterodontiformesConfig
        ]
    };
};
