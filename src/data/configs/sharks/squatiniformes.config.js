import { squatinaCalifornica } from "../../species/sharks/squatiniformes/squatina-californica";
import { squatinaDumeril } from "../../species/sharks/squatiniformes/squatina-dumeril";
import { squatinaAculeata } from "../../species/sharks/squatiniformes/squatina-aculeata";
import { squatinaAlbipunctata } from "../../species/sharks/squatiniformes/squatina-albipunctata";
import { squatinaFormosa } from "../../species/sharks/squatiniformes/squatina-formosa";
import { squatinaTergocellatoides } from "../../species/sharks/squatiniformes/squatina-tergocellatoides";
import { squatinaOculata } from "../../species/sharks/squatiniformes/squatina-oculata";

export const squatiniformesConfig = {
    children: [
        {
            children: [
                squatinaAculeata,
                {
                    children: [
                        {
                            children: [
                                squatinaAlbipunctata,
                                {
                                    children: [
                                        squatinaCalifornica,
                                        squatinaDumeril
                                    ]
                                }
                            ]
                        },
                        {
                            children: [
                                squatinaFormosa,
                                squatinaTergocellatoides
                            ]
                        }
                    ]
                }
            ]
        },
        squatinaOculata
    ]
}
