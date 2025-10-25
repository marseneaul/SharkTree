import { speciesDataLoader } from "../../../utils/data-loader";

export const rajiformesConfig = async () => {
    // Load the other ray configs dynamically
    const arhynchobatidaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'arhynchobatidae');
    const rajidaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'rajidae');
    
    // Load individual species data dynamically
    const crurirajaHulleyi = await speciesDataLoader.loadSpeciesData('rays/rajiformes/cruriraja-hulleyi');
    const sinobatisBulbicauda = await speciesDataLoader.loadSpeciesData('rays/rajiformes/sinobatis-bulbicauda');
    
    return {
        children: [
            rajidaeConfig,
            {
                children: [
                    {
                        children: [
                            arhynchobatidaeConfig,
                            crurirajaHulleyi
                        ]
                    },
                    sinobatisBulbicauda
                ]
            }
        ]
    };
};
