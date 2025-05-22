import { gymnuraAltavela } from "../species/myliobatiformes/gymnuridae/gymnura-altavela";
import { gymnuraAustralis } from "../species/myliobatiformes/gymnuridae/gymnura-australis";
import { gymnuraCrebripunctata } from "../species/myliobatiformes/gymnuridae/gymnura-crebripunctata";
import { gymnuraMarmorata } from "../species/myliobatiformes/gymnuridae/gymnura-marmorata";
import { gymnuraMicrura } from "../species/myliobatiformes/gymnuridae/gymnura-micrura";
import { gymnuraPoecilura } from "../species/myliobatiformes/gymnuridae/gymnura-poecilura";
import { gymnuraZonura } from "../species/myliobatiformes/gymnuridae/gymnura-zonura";

export const gymnuridaeConfig = {
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
}