import { speciesDataLoader } from "../../../utils/data-loader";

export const squatiniformesConfig = async () => {
    // Load all species data dynamically
    const squatinaCalifornica = await speciesDataLoader.loadSpeciesData('sharks/squatiniformes/squatina-californica');
    const squatinaDumeril = await speciesDataLoader.loadSpeciesData('sharks/squatiniformes/squatina-dumeril');
    const squatinaAculeata = await speciesDataLoader.loadSpeciesData('sharks/squatiniformes/squatina-aculeata');
    const squatinaAlbipunctata = await speciesDataLoader.loadSpeciesData('sharks/squatiniformes/squatina-albipunctata');
    const squatinaFormosa = await speciesDataLoader.loadSpeciesData('sharks/squatiniformes/squatina-formosa');
    const squatinaTergocellatoides = await speciesDataLoader.loadSpeciesData('sharks/squatiniformes/squatina-tergocellatoides');
    const squatinaOculata = await speciesDataLoader.loadSpeciesData('sharks/squatiniformes/squatina-oculata');
    
    return {
        children: [
            {
                children: [
                    squatinaAculeata,
                    {
                        children: [
                            {
                                children: [
                                    squatinaAlbipunctata,
                                    {
                                        children: [
                                            squatinaCalifornica,
                                            squatinaDumeril
                                        ]
                                    }
                                ]
                            },
                            {
                                children: [
                                    squatinaFormosa,
                                    squatinaTergocellatoides
                                ]
                            }
                        ]
                    }
                ]
            },
            squatinaOculata
        ]
    };
};
