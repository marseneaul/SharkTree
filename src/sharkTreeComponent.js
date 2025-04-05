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
import { StringUtils } from "./utils/string-utils";

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
                                    `<option value="${configKey}">${StringUtils.capitalizeFirstLetter(configKey)}</option>`
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
                background: #FFFFFF;
                font-family: 'Roboto', sans-serif; /* Clean, modern font */
            }
            #phylo-container {
                position: relative;
                width: 60%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #FFFFFF;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin: 10px;
            }
            #shark-screen-container {
                position: relative;
                width: 40%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 20px;
            }
            #shark-screen {
                position: relative;
                width: 100%;
                max-height: 70%;
                padding: 20px;
                background: #FFFFFF;
                border: 1px solid #E0E0E0;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                overflow-y: auto;
                font-size: 14px;
                line-height: 1.6;
                color: #2F4F4F; /* Dark slate gray */
            }
            #shark-screen h3 {
                margin: 0 0 10px 0;
                font-size: 18px;
                color: #00688B; /* Darker teal */
            }
            #shark-screen p {
                margin: 5px 0;
            }
            #dropdown-container {
                position: absolute;
                top: 10px;
                left: 10px;
                z-index: 100;
            }
            #dropdown-container label {
                color: #2F4F4F;
                margin-right: 10px;
            }
            #shark-config-dropdown {
                padding: 5px;
                border: 1px solid #E0E0E0;
                border-radius: 5px;
                background: #FFFFFF;
                font-size: 14px;
                color: #2F4F4F;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            }
            img {
                width: 80%;
                border-radius: 5px;
                margin-top: 10px;
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
        window.addEventListener("select-shark", this.selectSharkHandler.bind(this));
    }

    removeEventListeners() {
        window.removeEventListener("select-shark", this.selectSharkHandler.bind(this));
    }

    selectSharkHandler(event) {
        const selectedShark = event.detail.sharkSpecies;
        if (this.sharkScreen) {
            this.sharkScreen.innerHTML = selectedShark.getFormattedString();
            if (selectedShark.imageUrl) {
                const sharkImg = document.createElement("img");
                sharkImg.src = selectedShark.imageUrl;
                this.sharkScreen.appendChild(sharkImg);
            }
        }
        // Trigger visual update in SharkTree
        this.sharkTree.updateSelection(selectedShark);
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