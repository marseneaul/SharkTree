import { CoordinateStore } from "./store";
import { TimeTrack } from "./tracks/time-track";
import { RulerTrack } from "./tracks/ruler-track";

customElements.define("time-track", TimeTrack);
customElements.define("ruler-track", RulerTrack);

export class FossilTreeComponent extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement("template");
        this.shadow = this.attachShadow({mode: "open"});
        this.storeId = this.createStoreId();
    }

    /*----------------------------------------|
    |                 GETTERS                 |
    |----------------------------------------*/

    getStoreId() { return this.storeId; }
    createStoreId() { return Math.random().toString(16).slice(2); }

    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

    connectedCallback() {
        this.render();
        this.initializeFossilTree();
        this.setupEventListeners();
        this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
        this.resizeObserver.observe(this);
        this.handleResize(); 
    }

    disconnectedCallback() {
        this.removeEventListeners();
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    render() {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }

    initializeFossilTree() {
        this.addTracks();
    }

    addTracks() {
        const container = this.shadow.querySelector("#track-container");
        const rulerTrack = document.createElement("ruler-track");
        rulerTrack.setAttribute("store", this.storeId);
        container?.appendChild(rulerTrack);
        const timeTrack = document.createElement("time-track");
        timeTrack.setAttribute("store", this.storeId);
        container?.appendChild(timeTrack);
    }

    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/

    html() {
        return `
            <style> ${this.css()} </style>
            <div id="app-container">
                <div id="track-container"></div>
            </div>
        `;
    }
    
    css() {
        return `
            :host {
                display: block;
                width: 100%;
                height: 100vh;
            }
            #app-container {
                position: relative;
                width: 100%;
                height: 100%;
                background: #FFFFFF;
                font-family: "Roboto", sans-serif;
            }
            #track-container {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 100%;
                height: 100%;
            }
        `;
    }

    /*----------------------------------------|
    |                HANDLERS                 |
    |----------------------------------------*/

    setupEventListeners() {
        window.addEventListener("wheel", this.wheelHandler.bind(this), { passive: false });
    }

    removeEventListeners() {
        return;
    }

    wheelHandler(event) {
        const store = CoordinateStore.getInstance(this.storeId);
        event.preventDefault();
        store.zoom(event.deltaY);
    }

    handleResize() {
        const height = this.getBoundingClientRect().height;
        if (height > 0) {
            const store = CoordinateStore.getInstance(this.storeId);
            store.scale.range = [0, height];
            store.redrawListeners();
        }
    }
}

customElements.define("fossil-tree-component", FossilTreeComponent);