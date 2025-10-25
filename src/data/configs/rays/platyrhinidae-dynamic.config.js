import { speciesDataLoader } from "../../../utils/data-loader";

export const platyrhinidaeConfig = async () => {
    // Load all species data dynamically
    const platyrhinoidisTriseriata = await speciesDataLoader.loadSpeciesData('rays/platyrhinidae/platyrhinoidis-triseriata');
    
    return {
        children: [
            platyrhinoidisTriseriata
        ]
    };
};
