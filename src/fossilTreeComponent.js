import { TimeTrack } from "./tracks/time-track";

customElements.define("time-track", TimeTrack);

export class FossilTreeComponent extends HTMLElement {

    constructor() {
        super();
        this.template = document.createElement("template");
        this.shadow = this.attachShadow({mode: "open"});
    }

    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

    connectedCallback() {
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
        window.addEventListener("mousedown", this.mouseHandler());
    }

    removeEventListeners() {
        return;
    }

    mouseHandler(event) {
        console.log(event)
    }
}

customElements.define("fossil-tree-component", FossilTreeComponent);