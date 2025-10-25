import { speciesDataLoader } from "../../../utils/data-loader";

export const hemigaleidaeConfig = async () => {
    // Load all species data dynamically
    const hemigaleusAustraliensis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/hemigaleidae/hemigaleus-australiensis');
    const hemigaleusMicrostoma = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/hemigaleidae/hemigaleus-microstoma');
    const hemipristisElongata = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/hemigaleidae/hemipristis-elongata');
    const paragaleusPectoralis = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/hemigaleidae/paragaleus-pectoralis');
    const paragaleusRandalli = await speciesDataLoader.loadSpeciesData('sharks/carcharhiniformes/hemigaleidae/paragaleus-randalli');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            hemigaleusAustraliensis,
                            hemigaleusMicrostoma
                        ]
                    },
                    {
                        children: [
                            paragaleusPectoralis,
                            paragaleusRandalli
                        ]
                    }
                ]
            },
            hemipristisElongata
        ]
    };
};
