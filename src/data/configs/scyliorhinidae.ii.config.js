import { atelomycterusMarmoratus } from "../species/carcharhiniformes/scyliorhinidae-ii/atelomycterus-marmoratus";
import { atelomycterusMarnkalha } from "../species/carcharhiniformes/scyliorhinidae-ii/atelomycterus-marnkalha";
import { aulohalaelurusLabiosus } from "../species/carcharhiniformes/scyliorhinidae-ii/aulohalaelurus-labiosus";
import { schroederichthysBivius } from "../species/carcharhiniformes/scyliorhinidae-ii/schroederichthys-bivius";

export const scyliorhinidaeIIConfig = {
    children: [
        {
            children: [
                {
                    children: [
                        atelomycterusMarmoratus,
                        atelomycterusMarnkalha
                    ]
                },
                aulohalaelurusLabiosus
            ]
        },
        schroederichthysBivius
    ]
}