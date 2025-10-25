import { speciesDataLoader } from "../../../utils/data-loader";

export const centrophoridaeConfig = async () => {
    // Load all species data dynamically
    const centrophorusAcus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/centrophorus-acus');
    const centrophorusGranulosus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/centrophorus-granulosus');
    const centrophorusHarrissoni = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/centrophorus-harrissoni');
    const centrophorusIsodon = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/centrophorus-isodon');
    const centrophorusLusitanicus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/centrophorus-lusitanicus');
    const centrophorusMoluccensis = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/centrophorus-moluccensis');
    const centrophorusSquamosus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/centrophorus-squamosus');
    const centrophorusZeehaani = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/centrophorus-zeehaani');
    const deaniaCalcea = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/deania-calcea');
    const deaniaProfundorum = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/deania-profundorum');
    const deaniaQuadrispinosum = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/centrophoridae/deania-quadrispinosum');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    centrophorusLusitanicus,
                                    centrophorusHarrissoni,
                                    centrophorusIsodon
                                ]
                            },
                            {
                                children: [
                                    centrophorusSquamosus,
                                    {
                                        children: [
                                            centrophorusGranulosus,
                                            centrophorusAcus
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    centrophorusZeehaani
                ]
            },
            centrophorusMoluccensis,
            {
                children: [
                    deaniaCalcea,
                    {
                        children: [
                            deaniaQuadrispinosum,
                            deaniaProfundorum
                        ]
                    }
                ]
            }
        ]
    };
};
