import { Scale } from "./scales/scale";

export class Store implements Observer {
    id: string;
    scale: Scale;
    listeners: { [name: string]: Listener; };

    constructor (name: string) {
        this.id = name;

        this.initializeStore();
    }

    initializeStore(): void {
        this.initializeScale();
    }

    initializeScale(): void {
        const domain = [0, 4567000000];
        const range = [0, 806]; 
        this.scale = new Scale(domain, range);
    }

    registerListener(listener: Listener): void {
        this.listeners[listener.name] = listener;
    }

    updateListeners() {
        for (const listener of Object.values(this.listeners)) {
            listener.redraw();
            listener.update();
        }
    }

    redrawListeners() {
        for (const listener of Object.values(this.listeners)) {
            listener.redraw(); 
        }
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