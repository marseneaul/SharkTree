import { lifeEvents } from "../data/fossils/life-events";
import { TextEventTrack } from "./text-events-track";

export class LifeEventsTrack extends TextEventTrack {
    constructor() {
        super();
        this.name = "life-events";
        this.label = "Life Events"
        this.data = lifeEvents;
    }
}