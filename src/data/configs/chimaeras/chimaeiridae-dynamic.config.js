import { speciesDataLoader } from "../../../utils/data-loader";

export const chimaeiridaeConfig = async () => {
    // Load all species data dynamically
    const chimaeraFulva = await speciesDataLoader.loadSpeciesData('chimaeras/chimaeridae/chimaera-fulva');
    const chimaeraMonstrosa = await speciesDataLoader.loadSpeciesData('chimaeras/chimaeridae/chimaera-monstrosa');
    const chimaeraPhantasma = await speciesDataLoader.loadSpeciesData('chimaeras/chimaeridae/chimaera-phantasma');
    const hydrolagusAfricanus = await speciesDataLoader.loadSpeciesData('chimaeras/chimaeridae/hydrolagus-africanus');
    const hydrolagusAlberti = await speciesDataLoader.loadSpeciesData('chimaeras/chimaeridae/hydrolagus-alberti');
    const hydrolagusColliei = await speciesDataLoader.loadSpeciesData('chimaeras/chimaeridae/hydrolagus-colliei');
    const hydrolagusLemures = await speciesDataLoader.loadSpeciesData('chimaeras/chimaeridae/hydrolagus-lemures');
    const hydrolagusNovaezealandiae = await speciesDataLoader.loadSpeciesData('chimaeras/chimaeridae/hydrolagus-novaezealandiae');
    
    return {
        children: [
            {
                children: [
                    {
                        children: [
                            hydrolagusLemures,
                            chimaeraPhantasma
                        ]
                    },
                    {
                        children: [
                            hydrolagusColliei,
                            {
                                children: [
                                    hydrolagusAfricanus,
                                    hydrolagusAlberti
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                children: [
                    chimaeraFulva,
                    {
                        children: [
                            hydrolagusNovaezealandiae,
                            chimaeraMonstrosa
                        ]
                    }
                ]
            }
        ]
    };
};
