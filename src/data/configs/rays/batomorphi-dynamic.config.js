import { speciesDataLoader } from "../../../utils/data-loader";

export const batomorphiConfig = async () => {
    // Load the other ray configs dynamically
    const myliobatiformesConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'myliobatiformes');
    const platyrhinidaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'platyrhinidae');
    const rajiformesConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'rajiformes');
    const rhinopristiformesConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'rhinopristiformes');
    const torpediniformesConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'torpediniformes');
    
    return {
        children: [
            rajiformesConfig,
            rhinopristiformesConfig,
            {
                children: [
                    torpediniformesConfig,
                    platyrhinidaeConfig
                ]
            },
            myliobatiformesConfig
        ]
    };
};
