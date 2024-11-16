import {
    lamniformesConfig, heterodontiformesConfig, lamnidaeConfig, carcharhinidaeConfig,
    squatiniformesConfig, hexanchiformesConfig, pristiophoriformesConfig, orectolobiformesConfig,
    scyliorhinidaeIConfig, scyliorhinidaeIIConfig, scyliorhinidaeIIIConfig, triakidaeConfig,
    squalidaeConfig, squaliformesConfig, dalatiidaeConfig, etmopteridaeConfig, carcharhiniformesConfig,
    galeomorphiiConfig, squalomorphiiConfig, selachiiConfig
} from "./data/configs";

const sharkConfigs = {
    lamniformes: lamniformesConfig,
    heterodontiformes: heterodontiformesConfig,
    lamnidae: lamnidaeConfig,
    carcharhinidae: carcharhinidaeConfig,
    squatiniformes: squatiniformesConfig,
    hexanchiformes: hexanchiformesConfig,
    pristiophoriformes: pristiophoriformesConfig,
    orectolobiformes: orectolobiformesConfig,
    scyliorhinidaeI: scyliorhinidaeIConfig,
    scyliorhinidaeII: scyliorhinidaeIIConfig,
    scyliorhinidaeIII: scyliorhinidaeIIIConfig,
    carcharhiniformes: carcharhiniformesConfig,
    dalatiidae: dalatiidaeConfig,
    etmopteridae: etmopteridaeConfig,
    squalidae: squalidaeConfig,
    triakidae: triakidaeConfig,
    galeomorphii: galeomorphiiConfig,
    squaliformes: squaliformesConfig,
    squalomorphii: squalomorphiiConfig,
    selachii: selachiiConfig
};



import { SharkTree } from "./models/shark-tree";
import { BLACK, BLOOD_RED } from "./constants/colors";

export class SharkTreeComponent extends HTMLElement {

    constructor() {
        super();

        this.template = document.createElement("template");
        this.shadow = this.attachShadow({mode: "open"});
        this.sharkTree = null;

        this.sharkScreen = null;
    }

    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

    connectedCallback() {
        this.render();
        this.initializeSharkTree();
    }

    render() {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }

    initializeSharkTree() {
        this.sharkTree = new SharkTree(sharkConfigs.selachii);
        console.log(this.sharkTree)
        const sharkTreeSvg = this.sharkTree.draw();
        this.sharkScreen = this.shadow.querySelector("#shark-screen");
        this.setupEventListeners();

        const container = this.shadow.querySelector("#phylo-container");
        container.appendChild(sharkTreeSvg);
    }

    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/
    
    html() {
        return `
            <style> ${this.css()} </style>
            <div id="slide-container">
                <input type="number" min="0" max="10" value="1" class="slider" id="taxa-slider">
            </div>
            <div id="app-container">
                <div id="phylo-container">
                </div>
                <div id="shark-screen-container">
                    <div id="shark-screen">
                    </div>
                </div>
            </div>
        `;
    }

    css() {

        return `

            #slide-container {
                width: 100%;
                height: 50px;
            }

            #app-container {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;

            }
            #phylo-container {
                position: relative;
                width: 60%;
                height: 100%;
                overflow: clip;
                display: flex;
                justify-content: center;
            }

            #shark-screen-container {
                position: relative;
                width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            #shark-screen {
                position: relative;
                width: 70%;
                height: 70%;
                padding: 20px;
                border: 2px black solid;

                overflow-y: scroll;
            }

            img {
                width: 80%;
            }
        `;
    }

    /*----------------------------------------|
    |                HANDLERS                 |
    |----------------------------------------*/

    setupEventListeners() {
        window.addEventListener("next-shark", this.nextSharkHandler.bind(this));
        window.addEventListener("redraw", this.redraw.bind(this));
        // const maxDepth = this.sharkTree.getMaxDepth();
        // taxaSlider.setAttribute("max", `${maxDepth}`);
        const taxaSlider = this.shadow.querySelector("#taxa-slider");
        taxaSlider.addEventListener("input", this.handleTaxaSliderChange);
    }

    handleTaxaSliderChange(event) {
        const sliderValue = event.target.value;

        const slideEvent = new CustomEvent("zoomChange", {
            detail: { value: sliderValue }
        }); 

        window.dispatchEvent(slideEvent);
    }

    nextSharkHandler(event) {
        const currentShark = event.detail.sharkSpecies;
        if (this.sharkScreen) {
            this.sharkScreen.innerHTML = currentShark.getFormattedString();
            if (currentShark.imageUrl) {
                const sharkImg = document.createElement("img");
                sharkImg.src = currentShark.imageUrl;
                this.sharkScreen.appendChild(sharkImg);
            }
        }
        currentShark?.getNode()?.setAttribute("fill", BLOOD_RED);
    }

    redraw(_event) {
        let sharkTreeSvg = this.shadow.querySelector("#shark-tree");
        sharkTreeSvg?.remove();

        sharkTreeSvg = this.sharkTree.draw();
        const container = this.shadow.querySelector("#phylo-container");
        container.appendChild(sharkTreeSvg);

    }
}

customElements.define("shark-tree-component", SharkTreeComponent);