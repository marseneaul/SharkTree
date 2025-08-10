import { Drawing } from "../drawing/drawing";
import { TimeConfig } from "../interfaces/time-config";
import { CoordinateStore, Listener, Store } from "../store";

export class BaseTrack extends HTMLElement implements Listener {
    name: string;
    template: HTMLTemplateElement;
    shadow: ShadowRoot;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    width: number;
    data: TimeConfig;
    store: Store;

    constructor() {
        super();
        this.template = document.createElement("template");
        this.shadow = this.attachShadow({mode: "open"});
        this.name = "base";
    }

    /*----------------------------------------|
    |                 GETTERS                 |
    |----------------------------------------*/

    getStoreId(): string {
        return this.getAttribute("store");
    }

    getCanvasWidth(): number {
        return this.canvas.getBoundingClientRect().width;
    }

    getCanvasHeight(): number {
        return this.canvas.getBoundingClientRect().height;
    }

    update(): void {}

    redraw(): void {}

    connectedCallback() {
        this.render();
    }
    
    render(): void {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
        this.canvas = this.shadowRoot.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.store = new Store(this.getStoreId());
        this.redraw();
    }

    refreshCanvas(): void {
        this.clearCanvas();
        Drawing.adjustforPixelRatios(window, this.canvas, this.ctx);
    }

    clearCanvas(opacity = 1): void {
        this.ctx.fillStyle = "white";
        this.ctx.globalAlpha = opacity;
        this.ctx.fillRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
        this.ctx.globalAlpha = 1;   
    }

    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/

    html() {
        return `
            <style> ${this.css()} </style>
            <div id="canvas-container">
                <canvas id='${this.name}-track'></canvas>
            </div>
        `;
    }
    
    css() {
        return `
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }

            #canvas-container {
                display: block;
                width: ${this.width}px;
                height: 100%;
                border: 1px solid black;
            }
            
            canvas {
                width: 100%;
                height: 100%;
            }
        `;
    }
}