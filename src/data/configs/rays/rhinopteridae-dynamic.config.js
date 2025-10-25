import { speciesDataLoader } from "../../../utils/data-loader";

export const rhinopteridaeConfig = async () => {
    // Load all species data dynamically
    const rhinopteraBonasus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/rhinopteridae/rhinoptera-bonasus');
    const rhinopteraJavanica = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/rhinopteridae/rhinoptera-javanica');
    const rhinopteraJayakari = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/rhinopteridae/rhinoptera-jayakari');
    const rhinopteraNeglecta = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/rhinopteridae/rhinoptera-neglecta');
    const rhinopteraSteindachneri = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/rhinopteridae/rhinoptera-steindachneri');
    
    return {
        children: [
            rhinopteraBonasus,
            {
                children: [
                    rhinopteraSteindachneri,
                    rhinopteraJayakari
                ]
            },
            {
                children: [
                    rhinopteraJavanica,
                    rhinopteraNeglecta
                ]
            }
        ]
    };
};
