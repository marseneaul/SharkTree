import { speciesDataLoader } from "../../../utils/data-loader";

export const myliobatidaeConfig = async () => {
    // Load all species data dynamically
    const aetobatusFlagellum = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/aetobatus-flagellum');
    const aetobatusLaticeps = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/aetobatus-laticeps');
    const aetobatusNarinari = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/aetobatus-narinari');
    const aetobatusOcellatus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/aetobatus-ocellatus');
    const aetomylaeusMaculatus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/aetomylaeus-maculatus');
    const aetomylaeusMilvus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/aetomylaeus-milvus');
    const aetomylaeusNichofii = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/aetomylaeus-nichofii');
    const aetomylaeusVespertilio = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/aetomylaeus-vespertilio');
    const myliobatisAquila = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/myliobatis-aquila');
    const myliobatisCalifornica = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/myliobatis-californica');
    const myliobatisFreminvillei = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/myliobatis-freminvillei');
    const myliobatisLongirostris = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/myliobatis-longirostris');
    const myliobatisTobijei = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/myliobatis-tobijei');
    const myliobatisAustralis = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/myliobatis-australis');
    const pteromylaeusBovinus = await speciesDataLoader.loadSpeciesData('rays/myliobatiformes/myliobatidae/pteromylaeus-bovinus');
    
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
                                            aetomylaeusNichofii,
                                            {
                                                children: [
                                                    aetomylaeusMaculatus,
                                                    aetomylaeusMilvus
                                                ]
                                            }
                                        ]
                                    },
                                    pteromylaeusBovinus
                                ]
                            },
                            aetomylaeusVespertilio
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
                                                    myliobatisAquila,
                                                    myliobatisTobijei
                                                ]
                                            },
                                            {
                                                children: [
                                                    myliobatisFreminvillei,
                                                    myliobatisLongirostris
                                                ]
                                            }
                                        ]
                                    },
                                    myliobatisCalifornica
                                ]
                            },
                            {
                                children: [
                                    myliobatisAustralis,
                                    {
                                        children: [
                                            aetobatusFlagellum,
                                            aetobatusLaticeps
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                children: [
                    aetobatusNarinari,
                    aetobatusOcellatus
                ]
            }
        ]
    };
};
