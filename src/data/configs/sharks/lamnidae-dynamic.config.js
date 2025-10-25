import { speciesDataLoader } from "../../../utils/data-loader";

export const lamnidaeConfig = async () => {
    // Load all species data dynamically
    const carcharodonCarcharias = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/lamnidae/carcharodon-carcharias');
    const isurusOxyrinchus = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/lamnidae/isurus-oxyrinchus');
    const isurusPaucus = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/lamnidae/isurus-paucus');
    const lamnaDitropis = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/lamnidae/lamna-ditropis');
    const lamnaNasus = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/lamnidae/lamna-nasus');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            isurusOxyrinchus,
                            isurusPaucus
                        ]
                    },
                    carcharodonCarcharias
                ]
            },
            {
                children: [
                    lamnaDitropis,
                    lamnaNasus
                ]
            }
        ]
    };
};
