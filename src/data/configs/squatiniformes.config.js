import { squatinaCalifornica } from "../species/squatiniformes/squatina-californica";
import { squatinaDumeril } from "../species/squatiniformes/squatina-dumeril";
import { squatinaAculeata } from "../species/squatiniformes/squatina-aculeata";
import { squatinaAlbipunctata } from "../species/squatiniformes/squatina-albipunctata";
import { squatinaFormosa } from "../species/squatiniformes/squatina-formosa";
import { squatinaTergocellatoides } from "../species/squatiniformes/squatina-tergocellatoides";
import { squatinaOculata } from "../species/squatiniformes/squatina-oculata";

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
