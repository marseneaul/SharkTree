import { gymnuraAltavela } from "../../species/rays/myliobatiformes/gymnuridae/gymnura-altavela";
import { gymnuraAustralis } from "../../species/rays/myliobatiformes/gymnuridae/gymnura-australis";
import { gymnuraCrebripunctata } from "../../species/rays/myliobatiformes/gymnuridae/gymnura-crebripunctata";
import { gymnuraMarmorata } from "../../species/rays/myliobatiformes/gymnuridae/gymnura-marmorata";
import { gymnuraMicrura } from "../../species/rays/myliobatiformes/gymnuridae/gymnura-micrura";
import { gymnuraPoecilura } from "../../species/rays/myliobatiformes/gymnuridae/gymnura-poecilura";
import { gymnuraZonura } from "../../species/rays/myliobatiformes/gymnuridae/gymnura-zonura";

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