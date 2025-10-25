import { speciesDataLoader } from "../../../utils/data-loader";

export const hexanchiformesConfig = async () => {
    // Load all species data dynamically
    const hexanchusGriseus = await speciesDataLoader.loadSpeciesData('sharks/hexanchiformes/hexanchus-griseus');
    const hexanchusVitulus = await speciesDataLoader.loadSpeciesData('sharks/hexanchiformes/hexanchus-vitulus');
    const hexanchusNakamurai = await speciesDataLoader.loadSpeciesData('sharks/hexanchiformes/hexanchus-nakamurai');
    const heptranchiasPerlo = await speciesDataLoader.loadSpeciesData('sharks/hexanchiformes/heptranchias-perlo');
    const chlamydoselachusAnguineus = await speciesDataLoader.loadSpeciesData('sharks/hexanchiformes/chlamydoselachus-anguineus');
    const notorynchusCepedianus = await speciesDataLoader.loadSpeciesData('sharks/hexanchiformes/notorynchus-cepedianus');
    
    return {
        children: [
            chlamydoselachusAnguineus,
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    heptranchiasPerlo,
                                    hexanchusGriseus
                                ]
                            },
                            {
                                children: [
                                    hexanchusNakamurai,
                                    hexanchusVitulus
                                ]
                            }
                        ]
                    },
                    notorynchusCepedianus
                ]
            }
        ]
    };
};
