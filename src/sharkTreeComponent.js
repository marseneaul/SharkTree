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

    connectedCallback() {
        this.render();
        this.initializeSharkTree();
        this.setupDropdown();
        this.setupEventListeners();
        this.setupResizeObserver();
    }

    disconnectedCallback() {
        this.removeEventListeners();
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
        this.sharkTree?.destroy();
    }

    render() {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }

    initializeSharkTree(configKey = "selachii") {
        if (!sharkConfigs[configKey]) {
            console.error(`Configuration for ${configKey} not found`);
            return;
        }
        const container = this.shadow.querySelector("#phylo-container");
        const containerWidth = container ? container.offsetWidth : window.innerWidth * 0.6;
        this.sharkTree = new SharkTree(sharkConfigs[configKey], containerWidth);
        const sharkTreeSvg = this.sharkTree.draw();
        this.sharkScreen = this.shadow.querySelector("#shark-screen");
        container.innerHTML = "";
        container.appendChild(sharkTreeSvg);
        this.lastContainerWidth = containerWidth; // Store initial width
        this.resetDropdowns();
    }

    resetDropdowns() {
        const taxonomicDropdown = this.shadow.querySelector("#taxonomic-dropdown");
        const taxonomicValueDropdown = this.shadow.querySelector("#taxonomic-value-dropdown");
        const tagDropdown = this.shadow.querySelector("#tag-dropdown");
        const tagValueDropdown = this.shadow.querySelector("#tag-value-dropdown");
        taxonomicDropdown.value = "";
        taxonomicValueDropdown.innerHTML = "<option value=''>All</option>";
        tagDropdown.value = "";
        tagValueDropdown.innerHTML = "<option value=''>All</option>";
        this.updateTaxonomicValues();
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
            taxonomicValueDropdown.innerHTML = "<option value=''>All</option>";
        }
    }

    setupResizeObserver() {
        const container = this.shadow.querySelector("#phylo-container");
        if (!container) return;

        // Debounce resize handler
        const debounce = (fn, delay) => {
            let timeout = null;
            return (...args) => {
                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(() => fn(...args), delay);
            };
        };

        const handleResize = debounce(() => {
            const currentWidth = container.offsetWidth;
            // Only reinitialize if width changed significantly
            if (this.lastContainerWidth === null || Math.abs(currentWidth - this.lastContainerWidth) > 5) {
                this.reinitializeSharkTree();
                this.lastContainerWidth = currentWidth;
            }
        }, 200);

        this.resizeObserver = new ResizeObserver(handleResize);
        this.resizeObserver.observe(container);
    }

    reinitializeSharkTree() {
        const configDropdown = this.shadow.querySelector("#shark-config-dropdown");
        const selectedConfig = configDropdown?.value || "selachii";
        this.initializeSharkTree(selectedConfig);
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
                    <div id="tag-container">
                        <label for="tag-dropdown">Tag Category:</label>
                        <select id="tag-dropdown">
                            <option value="">None</option>
                            <option value="conservationStatus">Conservation Status</option>
                            <option value="reproductiveStrategy">Reproductive Strategy</option>
                            <option value="temperatureRegulation">Temperature Regulation</option>
                            <option value="behavior">Behavior</option>
                            <option value="feedingBehavior">Feeding Behavior</option>
                            <option value="groupBehavior">Group Behavior</option>
                            <option value="numGills">Number of Gills</option>
                            <option value="numDorsalFins">Number of Dorsal Fins</option>
                            <option value="analFin">Has Anal Fin</option>
                            <option value="hasSpiracles">Has Spiracles</option>
                            <option value="hasFlattenedBody">Has Flattened Body</option>
                            <option value="nictitatingMembrane">Has Nictitating Membrane</option>
                            <option value="caudalFinShape">Caudal Fin Shape</option>
                            <option value="mouthInFrontOfEyes">Has Mouth in Front of Eyes</option>
                            <option value="isBioluminescent">Bioluminescent</option>
                            <option value="hasDorsalFinSpines">Has Dorsal Fin Spines</option>
                        </select>
                        <select id="tag-value-dropdown">
                            <option value="">All</option>
                        </select>
                    </div>
                    <button id="info-button" aria-label="How to use this app">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11" stroke="#00688B" stroke-width="1" fill="#FFFFFF" />
                            <text x="12" y="17" font-size="13" font-weight="300" font-family="Open Sans, sans-serif" fill="#00688B" text-anchor="middle">?</text>
                        </svg>
                    </button>
                    <div id="info-tooltip">
                        <strong>How to Use:</strong>
                        <ul>
                            <li>Select a shark group from "Configuration" to view its phylogenetic tree.</li>
                            <li>Use "Taxonomic Level" to highlight species by genus, family, etc.</li>
                            <li>Filter by traits like conservation status with "Tag Category".</li>
                            <li>Click a shark on the tree to see its details on the right.</li>
                            <li>Scroll to rotate, pinch to zoom, double-click to reset, or drag to pan.</li>
                        </ul>
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
            :host {
                display: block;
                width: 100%;
                height: 100%;
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
                overflow: hidden;
            }
            #shark-screen-container {
                position: relative;
                width: 40%;
                height: 100%; /* Ensure full height */
                display: flex;
                flex-direction: column;
                align-items: stretch; /* Prevent shrinking */
                padding: 20px;
                margin-right: 20px;
                overflow: hidden; /* Prevent container overflow */
            }
            #shark-screen {
                position: relative;
                width: 100%;
                height: auto; /* Let content determine height */
                min-height: 100%; /* Fill container if content is short */
                max-height: none; /* Remove restrictive max-height */
                padding: 20px;
                background: #F9F9F9;
                border: 1px solid #E0E0E0;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                overflow-y: auto; /* Scroll only if needed */
                font-size: 14px;
                line-height: 1.6;
                color: #2F4F4F;
                box-sizing: border-box; /* Include padding in height calculations */
            }
            #shark-screen h2 {
                color: #00688B;
                margin: 0 0 10px 0;
                font-size: 21px;
            }
            #shark-screen .section {
                margin-bottom: 15px;
            }
            #shark-screen .section strong {
                color: #2F4F4F;
                font-weight: 600;
            }
            #shark-screen ul {
                list-style-type: none;
                padding-left: 10px;
            }
            #shark-screen li {
                margin: 5px 0;
                color: #555;
            }
            #shark-screen img {
                max-width: 100%;
                max-height: 200px; /* Cap image height to prevent overflow */
                object-fit: contain; /* Preserve aspect ratio */
                border-radius: 5px;
                margin-top: 10px;
            }
            #controls-container {
                position: absolute;
                top: 10px;
                left: 10px;
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 20px;
                z-index: 100;
                padding: 10px;
                background: rgba(255, 255, 255, 0.9);
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            #dropdown-container, #taxonomic-container, #tag-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 8px;
            }
            img {
                width: 80%;
                border-radius: 5px;
                margin-top: 10px;
            }
            label {
                color: #2F4F4F;
                font-size: 14px;
                white-space: nowrap;
            }
            select {
                padding: 5px 8px;
                border: 1px solid #E0E0E0;
                border-radius: 5px;
                background: #FFFFFF;
                font-size: 14px;
                color: #2F4F4F;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                min-width: 120px;
                max-width: 200px;
            }
            select:hover {
                border-color: #00688B;
                cursor: pointer;
            }
            #info-button {
                width: 22px;
                height: 22px;
                border: none;
                background: none;
                padding: 0;
                cursor: help;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform 0.2s ease;
            }
            #info-button:hover {
                transform: scale(1.1); /* Subtle zoom effect */
            }
            #info-button svg {
                stroke: #00688B; /* Match app's accent color */
            }
            #info-tooltip {
                display: none;
                position: absolute;
                top: 32px;
                right: 0;
                background: rgba(255, 255, 255, 0.95); /* Light, semi-transparent white */
                color: #2F4F4F; /* Match app text color */
                padding: 14px; /* More breathing room */
                border-radius: 6px;
                border: 1px solid #E0E0E0;
                font-size: 13px;
                line-height: 1.6; /* Increased spacing */
                max-width: 280px; /* Slightly wider */
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                z-index: 101;
                font-weight: 400;
            }
            #info-tooltip strong {
                font-weight: 600;
                color: #00688B;
                display: block;
                margin-bottom: 6px; /* Space below heading */
            }
            #info-tooltip ul {
                list-style-type: none;
                padding-left: 0;
                margin: 0;
            }
            #info-tooltip li {
                position: relative;
                padding-left: 16px; /* Space for bullet */
                margin-bottom: 6px; /* Space between items */
            }
            #info-tooltip li:before {
                content: "•"; /* Bullet point */
                color: #00688B; /* Accent color */
                position: absolute;
                left: 4px;
                font-size: 14px;
            }
            #info-button:hover + #info-tooltip {
                display: block;
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

        const tagDropdown = this.shadow.querySelector("#tag-dropdown");
        const tagValueDropdown = this.shadow.querySelector("#tag-value-dropdown");

        const categoryOrders = {
            conservationStatus: [
                "Extinct (EX)",
                "Extinct in the Wild (EW)",
                "Critically Endangered (CR)",
                "Endangered (EN)",
                "Vulnerable (VU)",
                "Near Threatened (NT)",
                "Conservation Dependent (CD)",
                "Least Concern (LC)",
                "Data Deficient (DD)",
                "Not Evaluated (NE)"
            ],
            numGills: [
                "5 Gills",
                "6 Gills",
                "7 Gills"
            ],
            numDorsalFins: [
                "1 Dorsal Fin",
                "2 Dorsal Fins"
            ],
            dorsalFinSpines: [
                "Both Dorsal Fin Spines",
                "Only First Dorsal Fin Spine",
                "No Dorsal Fin Spines"
            ],
            analFin: ["Yes Anal Fin", "No Anal Fin"],
            nictitatingMembrane: ["Yes Nictitating Membrane", "No Nictitating Membrane"],
            isBioluminescent: ["Is Bioluminescent", "Not Bioluminescent"],
            hasSpiracles: ["Yes Spiracles", "No Spiracles"],
            hasFlattenedBody: ["Yes Flattened Body", "No Flattened Body"],
            mouthInFrontOfEyes: ["Mouth In Front of Eyes", "Mouth Not In Front of Eyes"]
        };
    
        tagDropdown.addEventListener("change", (event) => {
            const category = event.target.value;
            if (category && this.sharkTree) {
                const categoryData = this.sharkTree.tagCategories.get(category);
                const values = new Set(categoryData?.species.flatMap(s => s.tags.filter(tag => this.sharkTree.getTagCategory(tag) === category)));
                // Sort values based on category
                const sortedValues = Array.from(values).sort((a, b) => {
                    const order = categoryOrders[category];
                    if (order) {
                        // Use defined order if available
                        const indexA = order.indexOf(a);
                        const indexB = order.indexOf(b);
                        // Handle cases where a value might not be in the order list
                        if (indexA === -1 && indexB === -1) return a.localeCompare(b);
                        if (indexA === -1) return 1;
                        if (indexB === -1) return -1;
                        return indexA - indexB;
                    }
                    // Default to alphabetical order
                    return a.localeCompare(b);
                });
                tagValueDropdown.innerHTML = `
                    <option value="">All</option>
                    ${sortedValues.map(v => {
                        let displayText = v;
                        if (v.startsWith("Yes ") || v === "Is Bioluminescent" || v === "Mouth In Front of Eyes") {
                            displayText = "Yes";
                        } else if (v.startsWith("No ") || v === "Not Bioluminescent" || v === "Mouth Not In Front of Eyes") {
                            displayText = "No";
                        }
                        return `<option value="${v}">${displayText}</option>`;
                    }).join("")}
                `;
                this.sharkTree.highlightTagCategory(category);
            } else {
                tagValueDropdown.innerHTML = "<option value=''>All</option>";
                this.sharkTree?.clearAllHighlights();
            }
        });
    
        tagValueDropdown.addEventListener("change", (event) => {
            const category = tagDropdown.value;
            const value = event.target.value;
            if (category && this.sharkTree) {
                this.sharkTree.highlightTagCategory(category, value || undefined);
            }
        });
    }

    removeEventListeners() {
        window.removeEventListener("select-shark", this.selectSharkHandler.bind(this));
    }

    selectSharkHandler(event) {
        const selectedShark = event.detail.sharkSpecies;
        if (this.sharkScreen) {
            const allSpecies = this.sharkTree.getSharkSpeciesList();
            this.sharkScreen.innerHTML = selectedShark.getFormattedString(allSpecies);
            if (selectedShark.imageUrl) {
                const sharkImg = document.createElement("img");
                sharkImg.src = selectedShark.imageUrl;
                this.sharkScreen.appendChild(sharkImg);
            }
        }
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