import { speciesDataLoader } from "../../../utils/data-loader";

export const urotrygonidaeConfig = async () => {
    // Load all species data dynamically
    const urobatisConcentricus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urotrygonidae/urobatis-concentricus');
    const urobatisHalleri = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urotrygonidae/urobatis-halleri');
    const urobatisJamaicensis = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urotrygonidae/urobatis-jamaicensis');
    const urobatisMaculatus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urotrygonidae/urobatis-maculatus');
    const urotrygonRogersi = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urotrygonidae/urotrygon-rogersi');
    const urotrygonSimulatrix = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urotrygonidae/urotrygon-simulatrix');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            urobatisConcentricus,
                            urobatisMaculatus
                        ]
                    },
                    urobatisHalleri
                ]
            },
            {
                children: [
                    urobatisJamaicensis,
                    {
                        children: [
                            urotrygonSimulatrix,
                            urotrygonRogersi
                        ]
                    }
                ]
            }
        ]
    };
};
