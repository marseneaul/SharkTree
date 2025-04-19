import { ANAL_FIN, BEHAVIOR, BIOLUMINESCENT, CONSERVATION_STATUS, DORSAL_FIN_SPINES, FLATTENED_BODY, MOUTH_IN_FRONT_OF_EYES, NICTITATING_MEMBRANE, NUM_DORSAL_FINS, NUM_GILLS, PROXIMAL_DORSAL_FINS, SPIRACLES } from "./constants/enums";
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
                    <div id="search-container">
                        <label for="shark-search">Search Shark:</label>
                        <input type="text" id="shark-search" placeholder="Enter common or binomial name" aria-describedby="search-label">
                        <div id="search-suggestions" class="suggestions"></div>
                    </div>
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
                            <option value="hasProximalDorsalFins">Has Proximal Dorsal Fins</option>
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
                            <li>Type a shark’s common or scientific name in "Search Shark" to find and highlight it.</li>
                            <li>Choose a shark group from "Configuration" to display its phylogenetic tree.</li>
                            <li>Select a "Taxonomic Level" (e.g., genus or family) to color matching species’ nodes and paths.</li>
                            <li>Pick a "Tag Category" (e.g., conservation status) to add dashed lines to paths of species with that trait.</li>
                            <li>Click a shark’s node to view its details on the right panel.</li>
                            <li>Scroll to rotate, pinch to zoom, double-click to reset, or drag to pan the tree.</li>
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
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                padding: 20px;
                margin-right: 20px;
                overflow: hidden;
            }
            #shark-screen {
                position: relative;
                width: 100%;
                height: auto;
                min-height: 100%;
                max-height: none;
                padding: 20px;
                background: #F9F9F9;
                border: 1px solid #E0E0E0;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                overflow-y: auto;
                font-size: 14px;
                line-height: 1.6;
                color: #2F4F4F;
                box-sizing: border-box;
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
                max-height: 200px;
                object-fit: contain;
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
            #search-container, #dropdown-container, #taxonomic-container, #tag-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 8px;
                position: relative;
            }
            #shark-search {
                padding: 5px 8px;
                border: 1px solid #E0E0E0;
                border-radius: 5px;
                background: #FFFFFF;
                font-size: 14px;
                color: #2F4F4F;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                width: 200px;
            }
            #shark-search:focus {
                outline: none;
                border-color: #00688B;
                box-shadow: 0 0 4px rgba(0, 104, 139, 0.3);
            }
            #search-suggestions {
                position: absolute;
                top: 100%;
                left: 70px; /* Align with input, accounting for label */
                width: 200px;
                max-height: 150px;
                overflow-y: auto;
                background: #FFFFFF;
                border: 1px solid #E0E0E0;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                z-index: 101;
                display: none;
            }
            #search-suggestions.visible {
                display: block;
            }
            .suggestion-item {
                padding: 8px 12px;
                font-size: 14px;
                color: #2F4F4F;
                cursor: pointer;
            }
            .suggestion-item:hover {
                background: #F0F8FF;
                color: #00688B;
            }
            .suggestion-item mark {
                background: #E0F7FA;
                font-weight: 600;
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
                transform: scale(1.1);
            }
            #info-button svg {
                stroke: #00688B;
            }
            #info-tooltip {
                display: none;
                position: absolute;
                top: 32px;
                right: 0;
                background: rgba(255, 255, 255, 0.95);
                color: #2F4F4F;
                padding: 14px;
                border-radius: 6px;
                border: 1px solid #E0E0E0;
                font-size: 13px;
                line-height: 1.6;
                max-width: 280px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                z-index: 101;
                font-weight: 400;
            }
            #info-tooltip strong {
                font-weight: 600;
                color: #00688B;
                display: block;
                margin-bottom: 6px;
            }
            #info-tooltip ul {
                list-style-type: none;
                padding-left: 0;
                margin: 0;
            }
            #info-tooltip li {
                position: relative;
                padding-left: 16px;
                margin-bottom: 6px;
            }
            #info-tooltip li:before {
                content: "•";
                color: #00688B;
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
                CONSERVATION_STATUS.EX,
                CONSERVATION_STATUS.EW,
                CONSERVATION_STATUS.CR,
                CONSERVATION_STATUS.EN,
                CONSERVATION_STATUS.VU,
                CONSERVATION_STATUS.NT,
                CONSERVATION_STATUS.CD,
                CONSERVATION_STATUS.LC,
                CONSERVATION_STATUS.DD,
                CONSERVATION_STATUS.NE,
            ],
            numGills: [
                NUM_GILLS.FIVE,
                NUM_GILLS.SIX,
                NUM_GILLS.SEVEN
            ],
            numDorsalFins: [
                NUM_DORSAL_FINS.ONE,
                NUM_DORSAL_FINS.TWO
            ],
            dorsalFinSpines: [
                DORSAL_FIN_SPINES.YES,
                DORSAL_FIN_SPINES.ONLY_ON_FIRST,
                DORSAL_FIN_SPINES.NO
            ],
            hasProximalDorsalFins: [PROXIMAL_DORSAL_FINS.YES, PROXIMAL_DORSAL_FINS.NO],
            analFin: [ANAL_FIN.YES, ANAL_FIN.NO],
            nictitatingMembrane: [NICTITATING_MEMBRANE.YES, NICTITATING_MEMBRANE.NO],
            isBioluminescent: [BIOLUMINESCENT.YES, BIOLUMINESCENT.NO],
            hasSpiracles: [SPIRACLES.YES, SPIRACLES.NO],
            hasFlattenedBody: [FLATTENED_BODY.YES, FLATTENED_BODY.NO],
            mouthInFrontOfEyes: [MOUTH_IN_FRONT_OF_EYES.YES, MOUTH_IN_FRONT_OF_EYES.NO]
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
                        if (v.startsWith("Yes ") || v === BIOLUMINESCENT.YES || v === MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES) {
                            displayText = "Yes";
                        } else if ((v.startsWith("No ") && v !== BEHAVIOR.NONE) || v === BIOLUMINESCENT.NO|| v === MOUTH_IN_FRONT_OF_EYES.MOUTH_NOT_IN_FRONT_OF_EYES) {
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

        const searchInput = this.shadow.querySelector("#shark-search");
        const suggestions = this.shadow.querySelector("#search-suggestions");

        searchInput.addEventListener("input", () => {
            const query = searchInput.value.trim().toLowerCase();
            this.updateSearchSuggestions(query, suggestions);
        });

        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const query = searchInput.value.trim().toLowerCase();
                const species = this.sharkTree?.getSharkSpeciesList();
                const match = species?.find(
                    s => s.commonName?.toLowerCase() === query || s.binomialName?.toLowerCase() === query
                );
                if (match) {
                    this.selectShark(match);
                    suggestions.innerHTML = "";
                    suggestions.classList.remove("visible");
                    searchInput.value = match.commonName || match.binomialName;
                }
            } else if (event.key === "Escape") {
                suggestions.innerHTML = "";
                suggestions.classList.remove("visible");
            }
        });

        document.addEventListener("click", (event) => {
            if (!searchInput.contains(event.target) && !suggestions.contains(event.target)) {
                suggestions.innerHTML = "";
                suggestions.classList.remove("visible");
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

    updateSearchSuggestions(query, suggestions) {
        if (!this.sharkTree || !query) {
            suggestions.innerHTML = "";
            suggestions.classList.remove("visible");
            return;
        }
    
        const species = this.sharkTree.getSharkSpeciesList();
        const matches = species
            .filter(s => 
                s.commonName?.toLowerCase().includes(query) || 
                s.binomialName?.toLowerCase().includes(query)
            )
            .slice(0, 5);
    
        if (matches.length === 0) {
            suggestions.innerHTML = "";
            suggestions.classList.remove("visible");
            return;
        }
    
        suggestions.innerHTML = matches
            .map(s => {
                const name = s.commonName || s.binomialName;
                const regex = new RegExp(`(${query})`, "gi");
                const highlighted = name.replace(regex, "<mark>$1</mark>");
                return `
                    <div class="suggestion-item" data-binomial="${s.binomialName}">
                        ${highlighted}
                    </div>
                `;
            })
            .join("");
        suggestions.classList.add("visible");

        suggestions.querySelectorAll(".suggestion-item").forEach(item => {
            item.addEventListener("click", () => {
                const binomial = item.dataset.binomial;
                const selectedShark = species.find(s => s.binomialName === binomial);
                if (selectedShark) {
                    this.selectShark(selectedShark);
                    const searchInput = this.shadow.querySelector("#shark-search");
                    searchInput.value = selectedShark.commonName || selectedShark.binomialName;
                    suggestions.innerHTML = "";
                    suggestions.classList.remove("visible");
                }
            });
        });
    }

    selectShark(shark) {
        if (this.sharkScreen) {
            const allSpecies = this.sharkTree.getSharkSpeciesList();
            this.sharkScreen.innerHTML = shark.getFormattedString(allSpecies);
            if (shark.imageUrl) {
                const sharkImg = document.createElement("img");
                sharkImg.src = shark.imageUrl;
                sharkImg.alt = `${shark.name} illustration`;
                sharkImg.onerror = () => {
                    sharkImg.src = "path/to/fallback-image.png";
                    sharkImg.alt = "Image not available";
                };
                this.sharkScreen.appendChild(sharkImg);
            }
        }
        this.sharkTree.updateSelection(shark);
        window.dispatchEvent(new CustomEvent("select-shark", { 
            detail: { sharkSpecies: shark } 
        }));
    }
}

customElements.define("shark-tree-component", SharkTreeComponent);