import {
    lamniformesConfig, heterodontiformesConfig, lamnidaeConfig, carcharhinidaeConfig,
    squatiniformesConfig, hexanchiformesConfig, pristiophoriformesConfig, orectolobiformesConfig,
    scyliorhinidaeIConfig, scyliorhinidaeIIConfig, scyliorhinidaeIIIConfig, triakidaeConfig,
    squalidaeConfig, squaliformesConfig, dalatiidaeConfig, etmopteridaeConfig, carcharhiniformesConfig,
    galeomorphiiConfig, squalomorphiiConfig, selachiiConfig
} from "./data/configs";

const sharkConfigs = {
    selachii: selachiiConfig,
    galeomorphii: galeomorphiiConfig,
    squalomorphii: squalomorphiiConfig,
    squaliformes: squaliformesConfig,
    carcharhiniformes: carcharhiniformesConfig,
    orectolobiformes: orectolobiformesConfig,
    lamniformes: lamniformesConfig,
    hexanchiformes: hexanchiformesConfig,
    squatiniformes: squatiniformesConfig,
    heterodontiformes: heterodontiformesConfig,
    pristiophoriformes: pristiophoriformesConfig,
    carcharhinidae: carcharhinidaeConfig,
    lamnidae: lamnidaeConfig,
    scyliorhinidaeI: scyliorhinidaeIConfig,
    scyliorhinidaeII: scyliorhinidaeIIConfig,
    scyliorhinidaeIII: scyliorhinidaeIIIConfig,
    dalatiidae: dalatiidaeConfig,
    etmopteridae: etmopteridaeConfig,
    squalidae: squalidaeConfig,
    triakidae: triakidaeConfig
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
        console.log(this.sharkTree);
        const sharkTreeSvg = this.sharkTree.draw();
        this.sharkScreen = this.shadow.querySelector("#shark-screen");
    
        const container = this.shadow.querySelector("#phylo-container");
        container.innerHTML = "";
        container.appendChild(sharkTreeSvg);
    
        // Reset taxonomic dropdowns
        const taxonomicDropdown = this.shadow.querySelector("#taxonomic-dropdown");
        const taxonomicValueDropdown = this.shadow.querySelector("#taxonomic-value-dropdown");
        taxonomicDropdown.value = ""; // Reset to "None"
        taxonomicValueDropdown.innerHTML = '<option value="">All</option>'; // Reset to "All" with no other options yet
        this.updateTaxonomicValues(); // Refresh values based on new tree
    }

    updateTaxonomicValues() {
        const taxonomicDropdown = this.shadow.querySelector("#taxonomic-dropdown");
        const taxonomicValueDropdown = this.shadow.querySelector("#taxonomic-value-dropdown");
        const level = taxonomicDropdown.value;
    
        if (level && this.sharkTree) {
            const levelData = this.sharkTree.taxonomicLevels.get(level);
            const values = new Set(levelData?.species.map(s => s[level]).filter(v => v));
            taxonomicValueDropdown.innerHTML = `
                <option value="">All</option>
                ${Array.from(values).map(v => `<option value="${v}">${v}</option>`).join("")}
            `;
        } else {
            taxonomicValueDropdown.innerHTML = '<option value="">All</option>';
        }
    }

    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/

    html() {
        return `
            <style> ${this.css()} </style>
            <div id="app-container">
                <div id="controls-container">
                    <div id="dropdown-container">
                        <label for="shark-config-dropdown">Configuration:</label>
                        <select id="shark-config-dropdown">
                            ${Object.keys(sharkConfigs).map(configKey => 
                                `<option value="${configKey}">${StringUtils.capitalizeFirstLetter(configKey)}</option>`
                            ).join("")}
                        </select>
                    </div>
                    <div id="taxonomic-container">
                        <label for="taxonomic-dropdown">Taxonomic Level:</label>
                        <select id="taxonomic-dropdown">
                            <option value="">None</option>
                            <option value="genus">Genus</option>
                            <option value="family">Family</option>
                            <option value="order">Order</option>
                            <option value="superorder">Superorder</option>
                            <option value="subdivision">Subdivision</option>
                        </select>
                        <select id="taxonomic-value-dropdown">
                            <option value="">All</option>
                        </select>
                    </div>
                </div>
                <div id="phylo-container"></div>
                <div id="shark-screen-container">
                    <div id="shark-screen"></div>
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
                font-family: "Roboto", sans-serif;
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
                color: #2F4F4F;
            }
            #shark-screen h3 {
                margin: 0 0 10px 0;
                font-size: 18px;
                color: #00688B;
            }
            #shark-screen p {
                margin: 5px 0;
            }
            #controls-container {
                position: absolute;
                top: 10px;
                left: 10px;
                display: flex;
                flex-direction: row; /* Ensure horizontal layout */
                align-items: center;
                gap: 20px; /* Increased gap between controls */
                z-index: 100;
                padding: 10px;
                background: rgba(255, 255, 255, 0.9); /* Slight background to separate from tree */
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            #dropdown-container, #taxonomic-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 8px; /* Space between label and dropdown */
            }
            label {
                color: #2F4F4F;
                font-size: 14px;
                white-space: nowrap; /* Prevent label text wrapping */
            }
            select {
                padding: 5px 8px;
                border: 1px solid #E0E0E0;
                border-radius: 5px;
                background: #FFFFFF;
                font-size: 14px;
                color: #2F4F4F;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                min-width: 120px; /* Ensure dropdowns have enough width */
                max-width: 200px; /* Prevent overly wide dropdowns */
            }
            select:hover {
                border-color: #00688B;
                cursor: pointer;
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
    
        const configDropdown = this.shadow.querySelector("#shark-config-dropdown");
        configDropdown.addEventListener("change", (event) => {
            const selectedConfig = event.target.value;
            this.initializeSharkTree(selectedConfig);
            this.updateTaxonomicValues(); // Ensure values update after config change
        });
    
        const taxonomicDropdown = this.shadow.querySelector("#taxonomic-dropdown");
        const taxonomicValueDropdown = this.shadow.querySelector("#taxonomic-value-dropdown");
        
        taxonomicDropdown.addEventListener("change", (event) => {
            const level = event.target.value;
            if (level && this.sharkTree) {
                const levelData = this.sharkTree.taxonomicLevels.get(level);
                const values = new Set(levelData?.species.map(s => s[level]).filter(v => v));
                taxonomicValueDropdown.innerHTML = `
                    <option value="">All</option>
                    ${Array.from(values).map(v => `<option value="${v}">${v}</option>`).join("")}
                `;
                this.sharkTree.highlightTaxonomicLevel(level);
            } else {
                taxonomicValueDropdown.innerHTML = '<option value="">All</option>';
                this.sharkTree?.clearAllHighlights();
            }
        });
    
        taxonomicValueDropdown.addEventListener("change", (event) => {
            const level = taxonomicDropdown.value;
            const value = event.target.value;
            if (level && this.sharkTree) {
                this.sharkTree.highlightTaxonomicLevel(level, value || undefined);
            }
        });
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