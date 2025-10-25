import { speciesDataLoader } from "../../../utils/data-loader";

export const gymnuridaeConfig = async () => {
    // Load all species data dynamically
    const gymnuraAltavela = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/gymnuridae/gymnura-altavela');
    const gymnuraAustralis = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/gymnuridae/gymnura-australis');
    const gymnuraCrebripunctata = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/gymnuridae/gymnura-crebripunctata');
    const gymnuraMarmorata = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/gymnuridae/gymnura-marmorata');
    const gymnuraMicrura = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/gymnuridae/gymnura-micrura');
    const gymnuraPoecilura = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/gymnuridae/gymnura-poecilura');
    const gymnuraZonura = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/gymnuridae/gymnura-zonura');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            gymnuraAltavela,
                            gymnuraAustralis
                        ]
                    },
                    {
                        children: [
                            gymnuraPoecilura,
                            gymnuraZonura
                        ]
                    }
                ]
            },
            {
                children: [
                    gymnuraCrebripunctata,
                    {
                        children: [
                            gymnuraMarmorata,
                            gymnuraMicrura
                        ]
                    }
                ]
            }
        ]
    };
};