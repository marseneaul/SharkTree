import { speciesDataLoader } from "../../../utils/data-loader";

export const rhinochimaeridaeConfig = async () => {
    // Load all species data dynamically
    const harriottaRaleighana = await speciesDataLoader.loadSpeciesData('chimaeras/rhinochimaeridae/harriotta-raleighana');
    const neoharriottaPinnata = await speciesDataLoader.loadSpeciesData('chimaeras/rhinochimaeridae/neoharriotta-pinnata');
    const rhinochimaeraPacifica = await speciesDataLoader.loadSpeciesData('chimaeras/rhinochimaeridae/rhinochimaera-pacifica');
    
    return {
        children: [
            neoharriottaPinnata,
            {
                children: [
                    rhinochimaeraPacifica,
                    harriottaRaleighana
                ]
            }
        ]
    };
};
