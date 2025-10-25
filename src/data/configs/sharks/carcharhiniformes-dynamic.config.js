import { speciesDataLoader } from "../../../utils/data-loader";

export const carcharhiniformesConfig = async () => {
    // Load the other shark configs dynamically
    const sphyrnidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'sphyrnidae');
    const carcharhinidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'carcharhinidae');
    const hemigaleidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'hemigaleidae');
    const triakidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'triakidae');
    const scyliorhinidaeIConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'scyliorhinidaeI');
    const scyliorhinidaeIIConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'scyliorhinidaeII');
    const scyliorhinidaeIIIConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'scyliorhinidaeIII');
    
    // Load individual species data dynamically
    const proscylliumHaberei = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/proscyllium-haberei');
    const galeocerdoCuvier = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/galeocerdo-cuvier');
    const leptochariasSmithii = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/leptocharias-smithii');
    const iagoGarricki = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/iago-garricki');
    const iagoOmanensis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/iago-omanensis');
    const pseudotriakisMicrodon = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/pseudotriakis-microdon');
    const gollumAttenuatus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/gollum-attenuatus');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    scyliorhinidaeIConfig,
                                    proscylliumHaberei
                                ]
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            {
                                                                children: [
                                                                    carcharhinidaeConfig,
                                                                    sphyrnidaeConfig
                                                                ]
                                                            },
                                                            galeocerdoCuvier
                                                        ]
                                                    },
                                                    hemigaleidaeConfig
                                                ]
                                            },
                                            leptochariasSmithii
                                        ]
                                    },
                                    triakidaeConfig,
                                    {
                                        children: [
                                            iagoOmanensis,
                                            iagoGarricki
                                        ]
                                    }
                                ]
                            },
                            {
                                children: [
                                    gollumAttenuatus,
                                    pseudotriakisMicrodon
                                ]
                            }
                        ]
                    },
                    scyliorhinidaeIIConfig
                ]
            },
            scyliorhinidaeIIIConfig
        ]
    };
};
