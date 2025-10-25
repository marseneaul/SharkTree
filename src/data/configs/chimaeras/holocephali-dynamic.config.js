import { speciesDataLoader } from "../../../utils/data-loader";

// Contribution to the molecular phylogenetic analysis of extant holocephalan fishes (Holocephali, Chimaeriformes)
export const holocephaliConfig = async () => {
    // Load the other chimaera configs dynamically
    const callorhinchidaeConfig = await speciesDataLoader.loadSpeciesConfig('chimaeras', 'callorhinchidae');
    const chimaeiridaeConfig = await speciesDataLoader.loadSpeciesConfig('chimaeras', 'chimaeiridae');
    const rhinochimaeridaeConfig = await speciesDataLoader.loadSpeciesConfig('chimaeras', 'rhinochimaeridae');
    
    return {
        children: [
            {
                children: [
                    rhinochimaeridaeConfig,
                    chimaeiridaeConfig
                ]
            },
            callorhinchidaeConfig
        ]
    };
};
