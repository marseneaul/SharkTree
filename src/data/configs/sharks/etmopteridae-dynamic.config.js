import { speciesDataLoader } from "../../../utils/data-loader";

export const etmopteridaeConfig = async () => {
    // Load all species data dynamically
    const centroscylliumFabricii = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/centroscyllium-fabricii');
    const centroscylliumGranulatum = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/centroscyllium-granulatum');
    const centroscylliumNigrum = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/centroscyllium-nigrum');
    const centroscylliumRitteri = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/centroscyllium-ritteri');
    const etmopterusBaxteri = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-baxteri');
    const etmopterusBigelowi = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-bigelowi');
    const etmopterusBrachyurus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-brachyurus');
    const etmopterusGracilispinis = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-gracilispinis');
    const etmopterusGranulosus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-granulosus');
    const etmopterusLucifer = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-lucifer');
    const etmopterusMolleri = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-molleri');
    const etmopterusPolli = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-polli');
    const etmopterusPrinceps = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-princeps');
    const etmopterusPusillus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-pusillus');
    const etmopterusSchultzi = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-schultzi');
    const etmopterusSentosus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-sentosus');
    const etmopterusSpinax = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-spinax');
    const etmopterusSplendidus = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-splendidus');
    const etmopterusUnicolor = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-unicolor');
    const etmopterusViator = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-viator');
    const etmopterusVirens = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/etmopterus-virens');
    const miroscylliumSheikoi = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/miroscyllium-sheikoi');
    const trigonognathusKabeyai = await speciesDataLoader.loadSpeciesData('sharks/squaliformes/etmopteridae/trigonognathus-kabeyai');
    
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
                                                    {
                                                        children: [
                                                            centroscylliumFabricii,
                                                            centroscylliumGranulatum
                                                        ]
                                                    },
                                                    centroscylliumNigrum
                                                ]
                                            },
                                            {
                                                children: [
                                                    centroscylliumRitteri,
                                                    etmopterusBaxteri
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        children: [
                                            {
                                                children: [
                                                    etmopterusGranulosus,
                                                    etmopterusGracilispinis
                                                ]
                                            },
                                            {
                                                children: [
                                                    etmopterusPolli,
                                                    etmopterusPrinceps
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
                                            etmopterusSpinax,
                                            etmopterusUnicolor
                                        ]
                                    },
                                    {
                                        children: [
                                            etmopterusViator,
                                            etmopterusVirens
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
                                    {
                                        children: [
                                            etmopterusSchultzi,
                                            trigonognathusKabeyai
                                        ]
                                    },
                                    {
                                        children: [
                                            etmopterusBigelowi,
                                            etmopterusPusillus
                                        ]
                                    },
                                    {
                                        children: [
                                            etmopterusSplendidus,
                                            etmopterusSentosus
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
                    etmopterusLucifer,
                    {
                        children: [
                            {
                                children: [
                                    etmopterusMolleri,
                                    etmopterusBrachyurus
                                ]
                            },
                            miroscylliumSheikoi
                        ]
                    }
                ]
            }
        ]
    };
};
