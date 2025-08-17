import { BaseTrack } from "./base-track";

export class RulerTrack extends BaseTrack {
    constructor() {
        super();
        this.name = "ruler";
        this.width = 60;
    }

    redraw(): void {
        this.refreshCanvas();
        this.drawRuler();
    }

    private drawRuler(): void {
        const begin = this.store.currentTimeInterval.begin;
        const end = this.store.currentTimeInterval.end;
        const interval = this.getNiceTickInterval();
        if (interval <= 0) return;

        const startTick = Math.ceil(begin / interval) * interval;

        this.ctx.font = "10px Roboto, sans-serif";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "right";
        this.ctx.textBaseline = "middle";
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;

        for (let t = startTick; t <= end; t += interval) {
            const y = this.store.scale.scale(t);
            if (y < 0 || y > this.getCanvasHeight()) continue;

            // Draw tick mark (short line on the right edge)
            this.ctx.beginPath();
            this.ctx.moveTo(this.width - 10, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.stroke();

            // Draw label (years in the past, formatted appropriately)
            let label: string;
            if (t >= 1e9) {
                label = `${(t / 1e9).toFixed(2)} Ga`;
            } else if (t >= 1e6) {
                label = `${Math.round(t / 1e6)} Ma`;
            } else if (t >= 1e3) {
                label = `${Math.round(t / 1e3)} ka`;
            } else {
                this.ctx.textBaseline = "hanging";
                label = `${Math.round(t)} ya`;
            }
            this.ctx.fillText(label, this.width - 15, y);
            this.ctx.textBaseline = "middle";
        }
    }

    private getNiceTickInterval(): number {
        const visibleDuration = this.store.currentTimeInterval.length;
        if (visibleDuration <= 0) return 0;

        const approxTicks = 10;  // Aim for ~10 ticks
        const roughInterval = visibleDuration / approxTicks;
        const order = Math.floor(Math.log10(roughInterval));
        const base = Math.pow(10, order);
        const normalized = roughInterval / base;

        let niceNormalized: number;
        if (normalized < 1.5) niceNormalized = 1;
        else if (normalized < 3) niceNormalized = 2;
        else if (normalized < 7) niceNormalized = 5;
        else niceNormalized = 10;

        return niceNormalized * base;
    }
}