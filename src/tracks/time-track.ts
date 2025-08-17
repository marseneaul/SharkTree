import { GEOLOGICAL_COLORS } from "../constants/colors";
import { geologicalTimeConfig } from "../data/fossils/geological-time";
import { TimeConfig } from "../interfaces/time-config";
import { BaseTrack } from "./base-track";

export class TimeTrack extends BaseTrack {
    constructor() {
        super();
        this.name = "time";

        this.width = 200;
        this.data = geologicalTimeConfig;
    }


    redraw(): void {
        this.refreshCanvas();
        this.redrawRecursive(this.data.children);
    }

    redrawRecursive(timeConfigs: TimeConfig[]): void {
        for (const [i, timeConfig] of Object.entries(timeConfigs)) {
            this.drawTimeConfig(timeConfig, parseInt(i));
            const children = timeConfig.children;
            if (children) this.redrawRecursive(children);
        }
    }

    drawTimeConfig(time: TimeConfig, i: number): void {
        const maFactor = 1e6;
        const gaFactor = 1e9;
        const geologicalName = time.geologicalName;
        const timeInterval = time.timeInterval;
        let timeBegin = parseFloat(timeInterval.split('-')[0].split('(')[0]);
        let timeEnd = parseFloat(timeInterval.split('-')[1].split('(')[0]);
        const timeBeginUnit = timeInterval.split('-')[0].split('(')[1].split(')')[0];
        const timeEndUnit = timeInterval.split('-')[1].split('(')[1].split(')')[0];
        if (timeBeginUnit === "Ma") timeBegin *= maFactor;
        else if (timeBeginUnit == "Ga") timeBegin *= gaFactor;
        if (timeEndUnit === "Ma") timeEnd *= maFactor;
        else if (timeEndUnit === "Ga") timeEnd *= gaFactor;
        const yBegin = this.store.scale.scale(timeBegin);
        const yEnd = this.store.scale.scale(timeEnd);

        const height = yBegin - yEnd;
        const color = GEOLOGICAL_COLORS[i];
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, yEnd, 2 * this.width, height);
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText(geologicalName, this.width / 4, yEnd + height / 2);
    }
}