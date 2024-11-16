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
import { BLACK } from "./constants/colors";

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

    disconnectedCallback() {
        this.removeEventListeners();
    }

    connectedCallback() {
        this.render();
        this.initializeSharkTree();
        this.setupDropdown();
        this.setupEventListeners();
    }

    render() {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }

    initializeSharkTree(configKey = "selachii") {
        this.sharkTree = new SharkTree(sharkConfigs[configKey]);
        console.log(this.sharkTree)
        const sharkTreeSvg = this.sharkTree.draw();
        this.sharkScreen = this.shadow.querySelector("#shark-screen");

        const container = this.shadow.querySelector("#phylo-container");
        container.innerHTML = "";
        container.appendChild(sharkTreeSvg);
    }

    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/
    
    html() {
        return `
            <style> ${this.css()} </style>
            <div id="app-container">
                <div id="dropdown-container">
                    <label for="shark-config-dropdown">Select Shark Configuration:</label>
                    <select id="shark-config-dropdown">
                        ${Object.keys(sharkConfigs)
                            .map(
                                (configKey) =>
                                    `<option value="${configKey}">${configKey}</option>`
                            )
                            .join("")}
                    </select>
                </div>
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

    setupDropdown() {
        const dropdown = this.shadow.querySelector("#shark-config-dropdown");
        dropdown.addEventListener("change", (event) => {
            const selectedConfig = event.target.value;
            this.initializeSharkTree(selectedConfig);
        });
    }

    setupEventListeners() {
        window.addEventListener("next-shark", this.nextSharkHandler.bind(this));
        window.addEventListener("redraw", this.redraw.bind(this));
    }

    removeEventListeners() {
        window.removeEventListener("next-shark", this.nextSharkHandler.bind(this));
        window.removeEventListener("redraw", this.redraw.bind(this));
    }

    nextSharkHandler(event) {
        const currentShark = event.detail.sharkSpecies;

        if (this.sharkScreen) {
            this.sharkScreen.innerHTML = '';
            this.sharkScreen.innerHTML = currentShark.getFormattedString();
            if (currentShark.imageUrl) {
                const sharkImg = document.createElement("img");
                sharkImg.src = currentShark.imageUrl;
                this.sharkScreen.appendChild(sharkImg);
            }
        }
        currentShark?.getNode()?.setAttribute("fill", "red");
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