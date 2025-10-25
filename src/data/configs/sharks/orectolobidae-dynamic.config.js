import { speciesDataLoader } from "../../../utils/data-loader";

export const orectolobidaeConfig = async () => {
    // Load all species data dynamically
    const orectolobusFloridus = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/orectolobidae/orectolobus-floridus');
    const orectolobusHalei = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/orectolobidae/orectolobus-halei');
    const orectolobusHutchinsi = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/orectolobidae/orectolobus-hutchinsi');
    const orectolobusMaculatus = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/orectolobidae/orectolobus-maculatus');
    const orectolobusOrnatus = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/orectolobidae/orectolobus-ornatus');
    const orectolobusParvimaculatus = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/orectolobidae/orectolobus-parvimaculatus');
    const eucrossorhinusDasypogon = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/orectolobidae/eucrossorhinus-dasypogon');
    
    return {
        children: [
            eucrossorhinusDasypogon,
            {
                children: [
                    orectolobusFloridus,
                    {
                        children: [
                            {
                                children: [
                                    orectolobusHalei,
                                    {
                                        children: [
                                            {
                                                children: [
                                                    orectolobusHutchinsi,
                                                    orectolobusParvimaculatus
                                                ]
                                            },
                                            orectolobusMaculatus
                                        ]
                                    }
                                ]
                            },
                            orectolobusOrnatus 
                        ]
                    }
                ]
            }
        ]
    };
};
