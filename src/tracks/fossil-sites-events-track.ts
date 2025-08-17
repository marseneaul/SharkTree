import { fossilSitesEvents } from "../data/fossils/fossil-sites-events";
import { TextEventTrack } from "./text-events-track";

export class FossilSitesEventsTrack extends TextEventTrack {
    constructor() {
        super();
        this.name = "fossil-sites-events";
        this.label = "Fossil Sites";
        this.data = fossilSitesEvents;
    }
}