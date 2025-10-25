import { speciesDataLoader } from "../../../utils/data-loader";

export const hemiscylliidaeConfig = async () => {
    // Load all species data dynamically
    const chiloscylliumGriseum = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/hemiscylliidae/chiloscyllium-griseum');
    const chiloscylliumHasseltii = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/hemiscylliidae/chiloscyllium-hasseltii');
    const chiloscylliumIndicum = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/hemiscylliidae/chiloscyllium-indicum');
    const chiloscylliumPlagiosum = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/hemiscylliidae/chiloscyllium-plagiosum');
    const chiloscylliumPunctatum = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/hemiscylliidae/chiloscyllium-punctatum');
    const hemiscylliumOcellatum = await speciesDataLoader.loadSpeciesData('sharks/orectolobiformes/hemiscylliidae/hemiscyllium-ocellatum');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            chiloscylliumPunctatum,
                            {
                                children: [
                                    chiloscylliumIndicum,
                                    chiloscylliumPlagiosum
                                ]
                            }
                        ]
                    },
                    hemiscylliumOcellatum
                ]
            },
            {
                children: [
                    chiloscylliumGriseum,
                    chiloscylliumHasseltii
                ]
            }
        ]
    };
};
