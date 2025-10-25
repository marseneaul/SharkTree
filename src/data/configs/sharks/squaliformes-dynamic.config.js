import { speciesDataLoader } from "../../../utils/data-loader";

export const squaliformesConfig = async () => {
    // Load the other shark configs dynamically
    const centrophoridaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'centrophoridae');
    const squalidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'squalidae');
    const dalatiidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'dalatiidae');
    const somniosidaeOxynotidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'somniosidaeOxynotidae');
    const etmopteridaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'etmopteridae');
    
    return {
        children: [
            centrophoridaeConfig,
            {
                children: [
                    etmopteridaeConfig,
                    somniosidaeOxynotidaeConfig,
                    {
                        children: [
                            squalidaeConfig,
                            dalatiidaeConfig
                        ]
                    }
                ]
            }
        ]
    };
};
