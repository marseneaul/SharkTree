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

    isPanning: boolean;
    mouseDownPos: [number, number];

    constructor() {
        super();
        this.template = document.createElement("template");
        this.shadow = this.attachShadow({mode: "open"});
        this.name = "base";

        this.isPanning = false;
        this.mouseDownPos = [0, 0];
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

    /*----------------------------------------|
    |                 SETTERS                 |
    |----------------------------------------*/

    setCursorStyle(style: string): void {
        this.canvas.style.cursor = style;
    }

    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

    connectedCallback() {
        this.render();
        this.initializeTrack();
    }
    
    render(): void {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
        this.canvas = this.shadowRoot.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.store = CoordinateStore.getInstance(this.getStoreId());
        this.addEventListeners();
        this.redraw();
    }

    initializeTrack(): void {
        this.store.registerListener(this);
    }

    addEventListeners(): void {
        this.canvas.addEventListener("mouseup", this.mouseUpHandler.bind(this));
        this.canvas.addEventListener("mousedown", this.mouseDownHandler.bind(this));
        this.canvas.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
    }

    /*----------------------------------------|
    |                 DRAWING                 |
    |----------------------------------------*/

    update(): void {}

    redraw(): void {}

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

    /*----------------------------------------|
    |                HANDLERS                 |
    |----------------------------------------*/

    mouseDownHandler(event: MouseEvent): void {
        event.preventDefault();
        this.mouseDownPos = [event.offsetX, event.offsetY];
        this.isPanning = true;
    }

    mouseMoveHandler(event: MouseEvent): void {
        if (this.isPanning) this.handlePanning(event);
        else this.handleMouseNotOverFeature(event);
    }

    mouseUpHandler(event: MouseEvent): void {
        if (this.isPanning) this.isPanning = false;
    }

    handlePanning(event: MouseEvent): void {
        this.setCursorStyle("grabbing");
        this.scrollVertically(event);
    }

    handleMouseNotOverFeature(event: MouseEvent): void {
        this.setCursorStyle("grab");
    }

    scrollVertically(event: MouseEvent): void {
        this.store.scroll(-event.movementY);
    }
}