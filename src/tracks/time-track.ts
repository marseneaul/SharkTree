import { GA_FACTOR, KA_FACTOR, MA_FACTOR } from "../constants/constants";
import { geologicalTimeConfig } from "../data/fossils/geological-time";
import { TimeConfig } from "../interfaces/time-config";
import { BaseTrack } from "./base-track";

export class TimeTrack extends BaseTrack {
    data: TimeConfig;
    constructor() {
        super();
        this.name = "time";
        this.label = "Geologic Time";

        this.width = 240;
        this.data = geologicalTimeConfig;
    }

    redraw(): void {
        this.refreshCanvas();
        this.redrawRecursive(this.data.children, 0);
    }

    redrawRecursive(timeConfigs: TimeConfig[], depth: number): void {
        const columnWidth = Math.round(this.width / 3);
        const columnWidths = [columnWidth, columnWidth, columnWidth];
        const colW = columnWidths[depth] || 50;
        const x = columnWidths.slice(0, depth).reduce((a, b) => a + b, 0);

        for (const timeConfig of timeConfigs) {
            const geologicalName = timeConfig.geologicalName;
            const timeInterval = timeConfig.timeInterval;
            let timeBegin = parseFloat(timeInterval.split('-')[0].split('(')[0]);
            let timeEnd = parseFloat(timeInterval.split('-')[1].split('(')[0]);
            const timeBeginUnit = timeInterval.split('-')[0].split('(')[1].split(')')[0];
            const timeEndUnit = timeInterval.split('-')[1].split('(')[1].split(')')[0];
            if (timeBeginUnit === "Ga") timeBegin *= GA_FACTOR;
            else if (timeBeginUnit === "Ma") timeBegin *= MA_FACTOR;
            else if (timeBeginUnit === "ka") timeBegin *= KA_FACTOR;
            if (timeEndUnit === "Ga") timeEnd *= GA_FACTOR;
            else if (timeEndUnit === "Ma") timeEnd *= MA_FACTOR;
            else if (timeEndUnit === "ka") timeEnd *= KA_FACTOR;
            const yBegin = this.store.scale.scale(timeBegin);
            const yEnd = this.store.scale.scale(timeEnd);
            const height = yBegin - yEnd;

            // Skip if entirely out of view
            if (yEnd >= this.getCanvasHeight() || yBegin <= 0) continue;

            // Draw the unit
            const color = timeConfig.color || "rgb(200,200,200)";
            this.ctx.fillStyle = color;
            this.ctx.globalAlpha = 0.7;
            this.ctx.fillRect(x, yEnd, colW, height);
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(x, yEnd, colW, height);
            this.ctx.globalAlpha = 1;

            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(x, yEnd);
            this.ctx.lineTo(x + colW, yEnd);
            this.ctx.stroke();

            const MIN_TEXT_HEIGHT = 20;
            const ROTATE_TEXT_HEIGHT = 40;
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            this.ctx.fillStyle = "black";
            if (height > MIN_TEXT_HEIGHT) {
                const midY = yEnd + height / 2;
                if (height > ROTATE_TEXT_HEIGHT && colW >= 50) {
                    this.ctx.fillText(geologicalName, x + colW / 2, midY);
                }
            }

            // Recurse to children if threshold met (show finer hierarchy on zoom)
            const SUBDIVIDE_THRESHOLD = 50; // Pixels; adjust for sensitivity
            if (timeConfig.children && timeConfig.children.length > 0 && height > SUBDIVIDE_THRESHOLD) {
                this.redrawRecursive(timeConfig.children, depth + 1);
            }
        }
    }
}