import { speciesDataLoader } from "../../../utils/data-loader";

export const callorhinchidaeConfig = async () => {
    // Load all species data dynamically
    const callorhinchusCallorynchus = await speciesDataLoader.loadSpeciesData('chimaeras/callorhinchidae/callorhinchus-callorynchus');
    const callorhinchusCapensis = await speciesDataLoader.loadSpeciesData('chimaeras/callorhinchidae/callorhinchus-capensis');
    const callorhinchusMilii = await speciesDataLoader.loadSpeciesData('chimaeras/callorhinchidae/callorhinchus-milii');
    
    return {
        children: [
            callorhinchusCapensis,
            {
                children: [
                    callorhinchusMilii,
                    callorhinchusCallorynchus
                ]
            }
        ]
    };
};
