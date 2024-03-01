import { SharkSpecies } from "../models/shark-species";

export class NextSharkEvent {
    sharkSpecies: SharkSpecies
    type: string

    constructor(sharkSpecies: SharkSpecies) {
        this.sharkSpecies = sharkSpecies;
        this.type = "next-shark";
    }
}