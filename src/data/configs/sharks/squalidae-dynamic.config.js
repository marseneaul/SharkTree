import { speciesDataLoader } from "../../../utils/data-loader";

export const squalidaeConfig = async () => {
    // Load all species data dynamically
    const cirrhigaleusAsper = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/cirrhigaleus-asper');
    const cirrhigaleusAustralis = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/cirrhigaleus-australis');
    const squalusAcanthias = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-acanthias');
    const squalusAlbifrons = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-albifrons');
    const squalusBrevirostris = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-brevirostris');
    const squalusChloroculus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-chloroculus');
    const squalusCrassispinus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-crassispinus');
    const squalusCubensis = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-cubensis');
    const squalusEdmundsi = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-edmundsi');
    const squalusGrahami = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-grahami');
    const squalusJaponicus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-japonicus');
    const squalusMegalops = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-megalops');
    const squalusMitsukurii = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-mitsukurii');
    const squalusMontalbani = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-montalbani');
    const squalusNasutus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-nasutus');
    const squalusSuckleyi = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/squalidae/squalus-suckleyi');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            cirrhigaleusAsper,
                            cirrhigaleusAustralis 
                        ]
                    },
                    {
                        children: [
                            squalusAcanthias,
                            squalusSuckleyi
                        ]
                    }
                ]
            },
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    squalusAlbifrons,
                                    {
                                        children: [
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            {
                                                                children: [
                                                                    squalusMitsukurii,
                                                                    squalusCubensis
                                                                ]
                                                            },
                                                            squalusChloroculus,
                                                            squalusMontalbani
                                                        ]
                                                    },
                                                    squalusGrahami
                                                ]
                                            },
                                            squalusEdmundsi
                                        ]
                                    }
                                ]
                            },
                            {
                                children: [
                                    squalusJaponicus,
                                    squalusNasutus
                                ]
                            }
                        ]
                    },
                    squalusCrassispinus 
                ]
            },
            {
                children: [
                    squalusBrevirostris,
                    squalusMegalops
                ]
            }
        ]
    };
};
