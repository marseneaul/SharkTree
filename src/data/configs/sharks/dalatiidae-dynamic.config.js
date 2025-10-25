import { speciesDataLoader } from "../../../utils/data-loader";

export const dalatiidaeConfig = async () => {
    // Load all species data dynamically
    const dalatiasLicha = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/dalatiidae/dalatias-licha');
    const isistiusBrasiliensis = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/dalatiidae/isistius-brasiliensis');
    const euprotomicrusBispinatus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/dalatiidae/euprotomicrus-bispinatus');
    const squaliolusAliae = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/dalatiidae/squaliolus-aliae');
    const squaliolusLaticaudus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/dalatiidae/squaliolus-laticaudus');
    
    return {
        children: [
            {
                children: [
                    dalatiasLicha,
                    isistiusBrasiliensis
                ]
            },
            {
                children: [
                    {
                        children: [
                            euprotomicrusBispinatus,
                            squaliolusAliae
                        ]
                    },
                    squaliolusLaticaudus
                ]
            }
        ]
    };
};
