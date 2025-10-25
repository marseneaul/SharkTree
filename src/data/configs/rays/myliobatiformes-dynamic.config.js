import { speciesDataLoader } from "../../../utils/data-loader";

export const myliobatiformesConfig = async () => {
    // Load the other ray configs dynamically
    const dasyatidaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'dasyatidae');
    const gymnuridaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'gymnuridae');
    const mobulidaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'mobulidae');
    const myliobatidaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'myliobatidae');
    const rhinopteridaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'rhinopteridae');
    const urolophusConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'urolophus');
    const urotrygonidaeConfig = await speciesDataLoader.loadSpeciesConfig('rays', 'urotrygonidae');
    
    // Load individual species data dynamically
    const megatrygonMicrops = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/megatrygon-microps');
    const hexatrygonBickelli = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/hexatrygon-bickelli');
    const himanturaSchmardae = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/himantura-schmardae');
    const paratrygonAiereba = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/paratrygon-aiereba');
    const plesiobatisDaviesi = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/plesiobatis-daviesi');
    const potamotrygonMotoro = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/potamotrygon-motoro');
    const trygonopteraImitata = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/trygonoptera-imitata');
    const trygonopteraOvalis = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/trygonoptera-ovalis');
    const trygonopteraPersonata = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/trygonoptera-personata');
    const trygonopteraTestacea = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/trygonoptera-testacea');
    
    return {
        children: [
            {
                children: [
                    dasyatidaeConfig,
                    {
                        children: [
                            {
                                children: [
                                    megatrygonMicrops,
                                    {
                                        children: [
                                            himanturaSchmardae,
                                            {
                                                children: [
                                                    paratrygonAiereba,
                                                    potamotrygonMotoro
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            urotrygonidaeConfig
                        ]
                    }
                ]
            },
            {
                children: [
                    {
                        children: [
                            gymnuridaeConfig,
                            {
                                children: [
                                    hexatrygonBickelli,
                                    {
                                        children: [
                                            {
                                                children: [
                                                    {
                                                        children: [
                                                            trygonopteraImitata,
                                                            trygonopteraTestacea
                                                        ]
                                                    },
                                                    trygonopteraPersonata
                                                ]
                                            },
                                            trygonopteraOvalis
                                        ]
                                    }
                                ]
                            },
                            {
                                children: [
                                    plesiobatisDaviesi,
                                    {
                                        children: [
                                            myliobatidaeConfig,
                                            {
                                                children: [
                                                    mobulidaeConfig,
                                                    rhinopteridaeConfig
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    urolophusConfig
                ]
            }
        ]
    };
};
