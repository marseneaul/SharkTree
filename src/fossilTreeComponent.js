import { CoordinateStore } from "./store";
import { TimeTrack } from "./tracks/time-track";

customElements.define("time-track", TimeTrack);

export class FossilTreeComponent extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement("template");
        this.shadow = this.attachShadow({mode: "open"});
    }

    /*----------------------------------------|
    |                 GETTERS                 |
    |----------------------------------------*/

    getStoreId() {
        return this.storeId
    }

    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

    connectedCallback() {
        this.storeId = this.getAttribute("store");

        this.render();
        this.initializeFossilTree();
        this.setupEventListeners();
    }

    disconnectedCallback() {
        this.removeEventListeners();
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
        const timeTrack = document.createElement("time-track");
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
                height: ${window.innerHeight}px;
            }
            #app-container {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                background: #FFFFFF;
                font-family: "Roboto", sans-serif;
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
}

customElements.define("fossil-tree-component", FossilTreeComponent);