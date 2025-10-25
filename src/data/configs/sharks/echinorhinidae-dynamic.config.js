import { speciesDataLoader } from "../../../utils/data-loader";

export const echinorhinidaeConfig = async () => {
    // Load all species data dynamically
    const echinorhinusBrucus = await speciesDataLoader.loadSpeciesData('sharks/echinorhinidae/echinorhinus-brucus');
    const echinorhinusCookei = await speciesDataLoader.loadSpeciesData('sharks/echinorhinidae/echinorhinus-cookei');
    
    return {
        children: [
            echinorhinusBrucus,
            echinorhinusCookei
        ]
    };
};
