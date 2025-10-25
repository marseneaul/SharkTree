import { speciesDataLoader } from "../../../utils/data-loader";

export const pristiophoriformesConfig = async () => {
    // Load all species data dynamically
    const pliotremaWarreni = await speciesDataLoader.loadSpeciesData('sharks/pristiophoriformes/pliotrema-warreni');
    const pristiophorusCirratus = await speciesDataLoader.loadSpeciesData('sharks/pristiophoriformes/pristiophorus-cirratus');
    const pristiophorusJaponicus = await speciesDataLoader.loadSpeciesData('sharks/pristiophoriformes/pristiophorus-japonicus');
    
    return {
        children: [
            {
                children: [
                    pliotremaWarreni,
                    pristiophorusJaponicus
                ]
            },
            pristiophorusCirratus
        ]
    };
};
