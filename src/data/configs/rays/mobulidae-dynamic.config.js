import { speciesDataLoader } from "../../../utils/data-loader";

export const mobulidaeConfig = async () => {
    // Load all species data dynamically
    const mobulaBirostris = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/mobulidae/mobula-birostris');
    const mobulaHypostoma = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/mobulidae/mobula-hypostoma');
    const mobulaJapanica = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/mobulidae/mobula-japanica');
    const mobulaKuhlii = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/mobulidae/mobula-kuhlii');
    const mobulaMunkiana = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/mobulidae/mobula-munkiana');
    const mobulaThurstoni = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/mobulidae/mobula-thurstoni');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            mobulaBirostris,
                            mobulaJapanica
                        ]
                    },
                    {
                        children: [
                            mobulaKuhlii,
                            mobulaThurstoni
                        ]
                    }
                ]
            },
            {
                children: [
                    mobulaHypostoma,
                    mobulaMunkiana
                ]
            }
        ]
    };
};
