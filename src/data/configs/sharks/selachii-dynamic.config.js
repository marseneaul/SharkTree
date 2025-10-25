import { speciesDataLoader } from "../../../utils/data-loader";

export const selachiiConfig = async () => {
    // Load the other shark configs dynamically
    const galeomorphiiConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'galeomorphii');
    const squalomorphiiConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'squalomorphii');
    
    return {
        children: [
            galeomorphiiConfig,
            squalomorphiiConfig
        ]
    };
};
