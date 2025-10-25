import { speciesDataLoader } from "../../../utils/data-loader";

export const urolophusConfig = async () => {
    // Load all species data dynamically
    const urolophusCruciatus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-cruciatus');
    const urolophusExpansus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-expansus');
    const urolophusLobatus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-lobatus');
    const urolophusPaucimaculatus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-paucimaculatus');
    const urolophusKapalensis = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-kapalensis');
    const urolophusWestraliensis = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-westraliensis');
    const urolophusFlavomosaicus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-flavomosaicus');
    const urolophusBucculentus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-bucculentus');
    const urolophusViridis = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/urolophus/urolophus-viridis');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            {
                                children: [
                                    {
                                        children: [
                                            {
                                                children: [
                                                    urolophusBucculentus,
                                                    urolophusFlavomosaicus
                                                ]
                                            },
                                            urolophusWestraliensis
                                        ]
                                    },
                                    urolophusKapalensis
                                ]
                            },
                            {
                                children: [
                                    urolophusCruciatus,
                                    urolophusLobatus
                                ]
                            }
                        ]
                    },
                    urolophusPaucimaculatus
                ]
            },
            {
                children: [
                    urolophusExpansus,
                    urolophusViridis
                ]
            }
        ]
    };
};
