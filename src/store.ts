import { TimeInterval } from "./models/time-interval";
import { Scale } from "./scales/scale";

export class Store implements Observer {
    id: string;
    scale: Scale;
    listeners: { [name: string]: Listener; };
    previousTimeInterval: TimeInterval;
    currentTimeInterval: TimeInterval;
    ageOfEarth: TimeInterval;

    constructor (name: string) {
        this.id = name;

        this.initializeStore();
    }

    setCoordinates(timeInterval: TimeInterval): void {
        this.previousTimeInterval = this.currentTimeInterval;
        this.currentTimeInterval = timeInterval;
        this.scale.domain = timeInterval.toArray();

        this.redrawListeners();
        this.updateListeners();
    }

    initializeStore(): void {
        this.listeners = {};
        this.ageOfEarth = new TimeInterval(0, 4567000000);
        this.initializeScale();
        this.currentTimeInterval = this.ageOfEarth;
    }

    initializeScale(): void {
        const domain = this.ageOfEarth.toArray();
        const range = [0, 0];
        this.scale = new Scale(domain, range);
    }

    registerListener(listener: Listener): void {
        this.listeners[listener.name] = listener;
    }

    updateListeners(): void {
        for (const listener of Object.values(this.listeners)) {
            listener.redraw();
            listener.update();
        }
    }

    redrawListeners(): void {
        for (const listener of Object.values(this.listeners)) {
            listener.redraw(); 
        }
    }

    zoom(deltaY: number): void {
        if (!this.currentTimeInterval || !this.ageOfEarth) return;

        const center = (this.currentTimeInterval.begin + this.currentTimeInterval.end) / 2;
        const half = this.currentTimeInterval.length / 2;
        const k = 1.1;
        const MIN_TIME_INTERVAL = 500;

        let begin: number, end: number;
        // zoom out
        if (deltaY > 0) {
            if (this.currentTimeInterval.begin === this.ageOfEarth.begin && this.currentTimeInterval.length === this.ageOfEarth.length) return;
            begin = center - half * k < 0 ? 0 : center - half * k;
            end = center + half * k > this.ageOfEarth.length ? this.ageOfEarth.length : center + half * k;
        }
        // zoom in
        else if (this.currentTimeInterval.length > MIN_TIME_INTERVAL) {
            begin = center - half / k;
            end = center + half / k;
        }
        else return;

        this.setCoordinates(new TimeInterval(begin, end));
    }


    scroll(deltaY: number): void {
        if (!this.currentTimeInterval || !this.ageOfEarth) return;
        const SCROLL_FRICTION = 600;

        let begin: number, end: number;
        const shift = (this.currentTimeInterval.length * deltaY) / SCROLL_FRICTION;
        begin = this.currentTimeInterval.begin + shift - this.ageOfEarth.begin;
        end = this.currentTimeInterval.end + shift - this.ageOfEarth.begin;
        if (begin >= this.ageOfEarth.length - 1) return;
        if (begin < 0) begin = 0;
        if (end > this.ageOfEarth.length) end = this.ageOfEarth.length;
        
        this.setCoordinates(new TimeInterval(begin, end));
    }
}

export interface Observer {
    listeners: {[name: string]: Listener}

    registerListener(listener: Listener): void;
    updateListeners(): void;
    redrawListeners(): void;
}

export interface Listener {
    name: string;
    getStoreId(): string;
    update(): void;
    redraw(): void;
}

export const CoordinateStore = (function () {
    const instances = {};

    return {
        getInstance: (name = "store") => {
            if (!(name in instances)) instances[name] = new Store(name);
            return instances[name];
        }
    };
  })();