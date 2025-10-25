import { speciesDataLoader } from "../../../utils/data-loader";

export const heterodontiformesConfig = async () => {
    // Load all species data dynamically
    const heterodontusFrancisci = await speciesDataLoader.loadSpeciesData('sharks/heterodontiformes/heterodontus-francisci');
    const heterodontusMexicanus = await speciesDataLoader.loadSpeciesData('sharks/heterodontiformes/heterodontus-mexicanus');
    const heterodontusGaleatus = await speciesDataLoader.loadSpeciesData('sharks/heterodontiformes/heterodontus-galeatus');
    const heterodontusPortusjacksoni = await speciesDataLoader.loadSpeciesData('sharks/heterodontiformes/heterodontus-portusjacksoni');
    const heterodontusZebra = await speciesDataLoader.loadSpeciesData('sharks/heterodontiformes/heterodontus-zebra');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    heterodontusPortusjacksoni,
                                    heterodontusZebra
                                ]
                            },
                            heterodontusGaleatus
                        ]
                    },
                    heterodontusMexicanus
                ]
            },
            heterodontusFrancisci
        ]
    };
};
