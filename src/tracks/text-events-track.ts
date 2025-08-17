import { BaseTrack } from "./base-track";
import { MA_FACTOR } from "../constants/constants";
import { EventConfig } from "../interfaces/event-config";

export class TextEventTrack extends BaseTrack {
    data: EventConfig[];
    constructor() {
        super();
        this.name = "text-events";
        this.width = 300;
        this.data = [];
    }

    redraw(): void {
        this.refreshCanvas();
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "left";
        this.ctx.font = "12px Roboto, sans-serif";
        this.ctx.textBaseline = "hanging";

        const normalFont = "12px Roboto, sans-serif";
        const italicFont = "italic 12px Roboto, sans-serif";

        // Collect visible events with their y positions
        const visibleEvents = [];
        for (const event of this.data) {
            const match = event.estimatedDate.match(/([\d\.]+)\(Mya\)/);
            if (!match) continue;
            const value = parseFloat(match[1]) * MA_FACTOR;
            const y = this.store.scale.scale(value);
            if (y >= 0 && y <= this.getCanvasHeight()) {
                visibleEvents.push({ event, y });
            }
        }

        // Sort by y ascending (top to bottom)
        visibleEvents.sort((a, b) => a.y - b.y);

        // Draw with min spacing to avoid overlap
        const minSpacing = 15; // Pixels; adjust as needed
        let lastY = -Infinity;
        for (const { event, y } of visibleEvents) {
            if (y - lastY >= minSpacing) {
                this.drawStyledText(this.ctx, event.eventName, 10, y, normalFont, italicFont);
                lastY = y;
            }
        }
    }

    private drawStyledText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, normalFont: string, italicFont: string): void {
        const parts = text.split('*');
        let currentX = x;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (part) {  // Skip empty parts
                ctx.font = (i % 2 === 0) ? normalFont : italicFont;
                ctx.fillText(part, currentX, y);
                currentX += ctx.measureText(part).width;
            }
        }
    }
}