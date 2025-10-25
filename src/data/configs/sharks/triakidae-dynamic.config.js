import { speciesDataLoader } from "../../../utils/data-loader";

export const triakidaeConfig = async () => {
    // Load all species data dynamically
    const mustelusAlbipinnis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-albipinnis');
    const mustelusAntarcticus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-antarcticus');
    const mustelusAsterias = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-asterias');
    const mustelusCalifornicus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-californicus');
    const mustelusCanis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-canis');
    const mustelusHenlei = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-henlei');
    const mustelusLenticulatus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-lenticulatus');
    const mustelusLunulatus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-lunulatus');
    const mustelusManazo = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-manazo');
    const mustelusMosis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-mosis');
    const mustelusMustelus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-mustelus');
    const mustelusNorrisi = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-norrisi');
    const mustelusPalumbes = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-palumbes');
    const mustelusRavidus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-ravidus');
    const mustelusSchmitti = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-schmitti');
    const mustelusStevensi = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-stevensi');
    const mustelusWidodoi = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/mustelus-widodoi');
    const furgaleusMacki = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/furgaleus-macki');
    const galeorhinusGaleus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/galeorhinus-galeus');
    const hemitriakisComplicofasciata = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/hemitriakis-complicofasciata');
    const hemitriakisFalcata = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/hemitriakis-falcata');
    const hemitriakisJapanica = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/hemitriakis-japanica');
    const hemitriakisLeucoperiptera = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/hemitriakis-leucoperiptera');
    const hypogaleusHyugaensis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/hypogaleus-hyugaensis');
    const scylliogaleusQuecketti = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/scylliogaleus-quecketti');
    const triakisMegalopterus = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/triakis-megalopterus');
    const triakisScyllium = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/triakis-scyllium');
    const triakisSemifasciata = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/triakidae/triakis-semifasciata');
    
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
                                                            mustelusAlbipinnis,
                                                            mustelusCalifornicus
                                                        ]
                                                    },
                                                    mustelusCanis
                                                ]
                                            },
                                            {
                                                children: [
                                                    mustelusHenlei,
                                                    mustelusLunulatus
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                children: [
                                                    mustelusMosis,
                                                    mustelusNorrisi
                                                ]
                                            },
                                            {
                                                children: [
                                                    mustelusPalumbes,
                                                    mustelusRavidus
                                                ]
                                            }
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
                                                    {
                                                        children: [
                                                            mustelusWidodoi,
                                                            mustelusStevensi
                                                        ]
                                                    },
                                                    mustelusMustelus
                                                ]
                                            },
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            mustelusAntarcticus,
                                                            mustelusLenticulatus
                                                        ]
                                                    },
                                                    mustelusStevensi
                                                ]
                                            },
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            mustelusAsterias,
                                                            mustelusPalumbes
                                                        ]
                                                    },
                                                    mustelusSchmitti
                                                ]
                                            }
                                        ]
                                    },
                                    mustelusManazo
                                ]
                            },
                            {
                                children: [
                                    scylliogaleusQuecketti,
                                    triakisMegalopterus
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
                                            furgaleusMacki,
                                            galeorhinusGaleus
                                        ]
                                    },
                                    {
                                        children: [
                                            hemitriakisComplicofasciata,
                                            hemitriakisFalcata
                                        ]
                                    }
                                ]
                            },
                            {
                                children: [
                                    hemitriakisJapanica,
                                    hemitriakisLeucoperiptera
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                children: [
                    hypogaleusHyugaensis,
                    {
                        children: [
                            triakisScyllium,
                            triakisSemifasciata
                        ]
                    }
                ]
            }
        ]
    };
};
