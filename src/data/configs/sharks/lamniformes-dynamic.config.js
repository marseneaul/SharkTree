import { speciesDataLoader } from "../../../utils/data-loader";

export const lamniformesConfig = async () => {
    // Load the other shark configs dynamically
    const lamnidaeConfig = await speciesDataLoader.loadSpeciesConfig('sharks', 'lamnidae');
    
    // Load individual species data dynamically
    const alopiasPelagicus = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/alopias-pelagicus');
    const alopiasSuperciliosus = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/alopias-superciliosus');
    const alopiasVulpinus = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/alopias-vulpinus');
    const carchariasTaurus = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/carcharias-taurus');
    const cetorhinusMaximus = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/cetorhinus-maximus');
    const megachasmaPelagios = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/megachasma-pelagios');
    const mitsukurinaOwstoni = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/mitsukurina-owstoni');
    const odontaspisFerox = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/odontaspis-ferox');
    const odontaspisNoronhai = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/odontaspis-noronhai');
    const pseudocarchariasKamoharai = await speciesDataLoader.loadSpeciesData('sharks/lamniformes/pseudocarcharias-kamoharai');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    alopiasPelagicus,
                                    alopiasVulpinus
                                ]
                            },
                            {
                                children: [
                                    {
                                        children: [
                                            alopiasSuperciliosus,
                                            {
                                                children: [
                                                    odontaspisFerox,
                                                    odontaspisNoronhai
                                                ]
                                            },
                                            pseudocarchariasKamoharai
                                        ]
                                    },
                                    megachasmaPelagios
                                ]
                            }
                        ]
                    },
                    {
                        children: [
                            {
                                children: [
                                    carchariasTaurus,
                                    cetorhinusMaximus
                                ]
                            },
                            lamnidaeConfig
                        ]
                    }
                ]
            },
            mitsukurinaOwstoni
        ]
    };
};
