import { sharksAndKinEvents } from "../data/fossils/sharks-and-kin-events";
import { TextEventTrack } from "./text-events-track";

export class SharksAndKinEventsTrack extends TextEventTrack {
    constructor() {
        super();
        this.name = "sharks-and-kin-events";
        this.label = "Sharks & Kin";
        this.data = sharksAndKinEvents;
    }
}