import { speciesDataLoader } from "../../../utils/data-loader";

export const torpediniformesConfig = async () => {
    // Load all species data dynamically
    const narcineEntemedor = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/narcine-entemedor');
    const narcineLasti = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/narcine-lasti');
    const narcineTasmaniensis = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/narcine-tasmaniensis');
    const narkeCapensis = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/narke-capensis');
    const torpedoFuscomaculata = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/torpedo-fuscomaculata');
    const torpedoMackayana = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/torpedo-mackayana');
    const torpedoMacneilli = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/torpedo-macneilli');
    const torpedoMarmorata = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/torpedo-marmorata');
    const torpedoNobiliana = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/torpedo-nobiliana');
    const torpedoSinuspersici = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/torpedo-sinuspersici');
    const torpedoTorpedo = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/torpedo-torpedo');
    const typhlonarkeAysoni = await speciesDataLoader.loadSpeciesData('rays/torpediniformes/typhlonarke-aysoni');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            narcineEntemedor,
                            narkeCapensis
                        ]
                    },
                    {
                        children: [
                            {
                                children: [
                                    torpedoNobiliana,
                                    torpedoMacneilli
                                ]
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            torpedoFuscomaculata,
                                                            torpedoTorpedo
                                                        ]
                                                    },
                                                    torpedoSinuspersici
                                                ]
                                            },
                                            torpedoMackayana
                                        ]
                                    },
                                    torpedoMarmorata
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                children: [
                    {
                        children: [
                            narcineLasti,
                            narcineTasmaniensis
                        ]
                    },
                    typhlonarkeAysoni
                ]
            }
        ]
    };
};
