import {
    lamniformesConfig, heterodontiformesConfig, lamnidaeConfig, carcharhinidaeConfig,
    squatiniformesConfig, hexanchiformesConfig, pristiophoriformesConfig, orectolobiformesConfig,
    scyliorhinidaeIConfig, scyliorhinidaeIIConfig, scyliorhinidaeIIIConfig, triakidaeConfig,
    squalidaeConfig, squaliformesConfig, dalatiidaeConfig, etmopteridaeConfig, carcharhiniformesConfig,
    galeomorphiiConfig, squalomorphiiConfig, selachiiConfig
} from "./data/configs";

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
        this.renderPhylogeneticTree()
    }

    render() {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }

    renderPhylogeneticTree() {
        const lamniformes = lamniformesConfig;
        const lamnidae = lamnidaeConfig;
        const heterodontiformes = heterodontiformesConfig;
        const carcharhinidae = carcharhinidaeConfig;
        const squatiniformes = squatiniformesConfig;
        const hexanchiformes = hexanchiformesConfig;
        const pristiophoriformes = pristiophoriformesConfig;
        const orectolobiformes = orectolobiformesConfig;
        const scyliorhinidaeI = scyliorhinidaeIConfig;
        const scyliorhinidaeII = scyliorhinidaeIIConfig;
        const scyliorhinidaeIII = scyliorhinidaeIIIConfig; 
        const carcharhiniformes = carcharhiniformesConfig;
        const dalatiidae = dalatiidaeConfig;
        const etmopteridae = etmopteridaeConfig;
        const squalidae = squalidaeConfig;
        const triakidae = triakidaeConfig;
        const galeomorphii = galeomorphiiConfig;
        const squaliformes = squaliformesConfig;
        const squalomorphii = squalomorphiiConfig;
        const selachii = selachiiConfig;
        
        this.sharkTree = new SharkTree(selachii);
        console.log(this.sharkTree)
        const sharkTreeSvg = this.sharkTree.draw();
        const sharkScreen = this.shadow.querySelector("#shark-screen");
        this.sharkScreen = sharkScreen;
        window.addEventListener("next-shark", this.nextSharkHandler.bind(this));
        window.addEventListener("redraw", this.redraw.bind(this));


        const maxDepth = this.sharkTree.getMaxDepth();
        const taxaSlider = this.shadow.querySelector("#taxa-slider");
        // taxaSlider.setAttribute("max", `${maxDepth}`);
        taxaSlider.addEventListener("input", this.handleTaxaSliderChange);

        const container = this.shadow.querySelector("#phylo-container");
        container.appendChild(sharkTreeSvg);

    }

    handleTaxaSliderChange(event) {
        const sliderValue = event.target.value;

        const slideEvent = new CustomEvent("slideChange", {
            detail: { value: sliderValue }
        }); 

        window.dispatchEvent(slideEvent);
    }
    
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