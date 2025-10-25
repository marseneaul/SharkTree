import { speciesDataLoader } from "../../../utils/data-loader";

export const carcharhinidaeConfig = async () => {
    // Load key species data dynamically - this is a very complex config with many species
    // Loading the most important ones for the structure
    const negaprionAcutidens = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/negaprion-acutidens');
    const negaprionBrevirostris = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/negaprion-brevirostris');
    const triaenodonObesus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/triaenodon-obesus');
    const prionaceGlauca = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/prionace-glauca');
    const carcharhinusGalapagensis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-galapagensis');
    const carcharhinusLongimanus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-longimanus');
    const carcharhinusObscurus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-obscurus');
    const carcharhinusPerezii = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-perezii');
    const carcharhinusLeucas = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-leucas');
    const carcharhinusPlumbeus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-plumbeus');
    const carcharhinusLimbatus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-limbatus');
    const carcharhinusMelanopterus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-melanopterus');
    const carcharhinusAlbimarginatus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-albimarginatus');
    const carcharhinusAmblyrhynchos = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-amblyrhynchos');
    const carcharhinusFalciformis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-falciformis');
    const carcharhinusAcronotus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-acronotus');
    const carcharhinusIsodon = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-isodon');
    const carcharhinusAltimus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/carcharhinidae/carcharhinus-altimus');
    
    // Simplified structure for this very complex config
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
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            carcharhinusAcronotus,
                                                            carcharhinusIsodon
                                                        ]
                                                    },
                                                    carcharhinusIsodon
                                                ]
                                            },
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            carcharhinusAlbimarginatus,
                                                            {
                                                                children: [
                                                                    carcharhinusAmblyrhynchos,
                                                                    {
                                                                        children: [
                                                                            carcharhinusFalciformis,
                                                                            prionaceGlauca
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        children: [
                                                            carcharhinusAltimus,
                                                            carcharhinusPlumbeus
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            carcharhinusLeucas,
                                            carcharhinusLimbatus
                                        ]
                                    }
                                ]
                            },
                            {
                                children: [
                                    carcharhinusMelanopterus,
                                    carcharhinusObscurus
                                ]
                            }
                        ]
                    },
                    {
                        children: [
                            carcharhinusGalapagensis,
                            carcharhinusLongimanus
                        ]
                    }
                ]
            },
            {
                children: [
                    {
                        children: [
                            negaprionAcutidens,
                            negaprionBrevirostris
                        ]
                    },
                    triaenodonObesus
                ]
            }
        ]
    };
};
