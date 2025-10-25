import { speciesDataLoader } from "../../../utils/data-loader";

export const orectolobiformesConfig = async () => {
    // Load the other shark configs dynamically
    const orectolobidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'orectolobidae');
    const hemiscylliidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'hemiscylliidae');
    
    // Load individual species data dynamically
    const brachaelurusColcloughi = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/brachaelurus-colcloughi');
    const brachaelurusWaddi = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/brachaelurus-waddi');
    const ginglymostomaCirratum = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/ginglymostoma-cirratum');
    const pseudoginglymostomaBrevicaudatum = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/pseudoginglymostoma-brevicaudatum');
    const nebriusFerrugineus = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/nebrius-ferrugineus');
    const stegostomaFasciatum = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/stegostoma-fasciatum');
    const rhincodonTypus = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/rhincodon-typus');
    const parascylliumCollare = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/parascyllium-collare');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    brachaelurusColcloughi,
                                    brachaelurusWaddi
                                ]
                            },
                            orectolobidaeConfig
                        ]
                    },
                    {
                        children: [
                            hemiscylliidaeConfig,
                            {
                                children: [
                                    {
                                        children: [
                                            ginglymostomaCirratum,
                                            nebriusFerrugineus
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                children: [
                                                    pseudoginglymostomaBrevicaudatum,
                                                    stegostomaFasciatum
                                                ]
                                            },
                                            rhincodonTypus
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            parascylliumCollare 
        ]
    };
};
