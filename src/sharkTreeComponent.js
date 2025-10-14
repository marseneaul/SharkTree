import { ANAL_FIN, BEHAVIOR, BIOLUMINESCENT, CONSERVATION_STATUS, DORSAL_FIN_SPINES, ELECTRIC_ORGAN, FLATTENED_BODY, MOUTH_IN_FRONT_OF_EYES, NICTITATING_MEMBRANE, NUM_DORSAL_FINS, NUM_GILLS, OPERCULUM, PROXIMAL_DORSAL_FINS, SNOUT_SHAPE, SPECIES_TYPE, SPIRACLES, TAIL_SPINES, VENOMOUS_SPINE } from "./constants/enums";
import { BreadcrumbComponent } from "./components/breadcrumb";
import { callorhinchidaeConfig } from "./data/configs/chimaeras/callorhinchidae.config";
import { chimaeiridaeConfig } from "./data/configs/chimaeras/chimaeiridae.config";
import { holocephaliConfig } from "./data/configs/chimaeras/holocephali.config";
import { rhinochimaeridaeConfig } from "./data/configs/chimaeras/rhinochimaeridae.config";
import { arhynchobatidaeConfig } from "./data/configs/rays/arhynchobatidae.config";
import { batomorphiConfig } from "./data/configs/rays/batomorphi.config";
import { dasyatidaeConfig } from "./data/configs/rays/dasyatidae.config";
import { gymnuridaeConfig } from "./data/configs/rays/gymnuridae.config";
import { mobulidaeConfig } from "./data/configs/rays/mobulidae.config";
import { myliobatidaeConfig } from "./data/configs/rays/myliobatidae.config";
import { myliobatiformesConfig } from "./data/configs/rays/myliobatiformes.config";
import { rajidaeConfig } from "./data/configs/rays/rajidae.config";
import { rajiformesConfig } from "./data/configs/rays/rajiformes.config";
import { rhinopristiformesConfig } from "./data/configs/rays/rhinopristiformes.config";
import { torpediniformesConfig } from "./data/configs/rays/torpediniformes.config";
import { urolophusConfig } from "./data/configs/rays/urolophus.config";
import { urotrygonidaeConfig } from "./data/configs/rays/urotrygonidea.config";
import {
    lamniformesConfig, heterodontiformesConfig, lamnidaeConfig, carcharhinidaeConfig,
    squatiniformesConfig, hexanchiformesConfig, pristiophoriformesConfig, orectolobiformesConfig,
    scyliorhinidaeIConfig, scyliorhinidaeIIConfig, scyliorhinidaeIIIConfig, triakidaeConfig,
    squalidaeConfig, squaliformesConfig, dalatiidaeConfig, etmopteridaeConfig, carcharhiniformesConfig,
    galeomorphiiConfig, squalomorphiiConfig, selachiiConfig
} from "./data/configs/sharks";

const speciesConfigs = {
    [SPECIES_TYPE.SHARKS]: {
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
    },
    [SPECIES_TYPE.RAYS]: {
        batomorphi: batomorphiConfig,
        rajiformes: rajiformesConfig,
        rhinopristiformes: rhinopristiformesConfig,
        torpediniformes: torpediniformesConfig,
        myliobatiformes: myliobatiformesConfig,
        arhynchobatidae: arhynchobatidaeConfig,
        dasyatidae: dasyatidaeConfig,
        gymnuridae: gymnuridaeConfig,
        mobulidae: mobulidaeConfig,
        myliobatidae: myliobatidaeConfig,
        rajidae: rajidaeConfig,
        urotrygonidae: urotrygonidaeConfig,
        urolophus: urolophusConfig
    },
    [SPECIES_TYPE.CHIMAERAS]: {
        holocephali: holocephaliConfig,
        chimaeridae: chimaeiridaeConfig,
        callorhinchidae: callorhinchidaeConfig,
        rhinochimaeridae: rhinochimaeridaeConfig,
    }
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
        this.breadcrumbComponent = null;
        this.currentSpeciesType = SPECIES_TYPE.SHARKS;
        this.currentConfig = null;
        this.currentSpecies = null;
    }

    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

    connectedCallback() {
        this.render();
        this.initializeBreadcrumb();
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

    initializeSharkTree(speciesType = SPECIES_TYPE.SHARKS, configKey = "selachii") {
        // Defensive check for speciesConfigs
        if (!speciesConfigs) {
            console.error("speciesConfigs is undefined");
            return;
        }
    
        // Validate speciesType
        if (!Object.values(SPECIES_TYPE).includes(speciesType)) {
            console.error(`Invalid speciesType: ${speciesType}`);
            speciesType = SPECIES_TYPE.SHARKS; // Fallback
        }
    
        // Validate configKey
        if (!speciesConfigs[speciesType] || !speciesConfigs[speciesType][configKey]) {
            console.error(`Configuration for ${speciesType}/${configKey} not found`);
            return;
        }

        // Update current state for breadcrumb
        this.currentSpeciesType = speciesType;
        this.currentConfig = configKey;
        this.currentSpecies = null; // Reset selected species when changing config
    
        const container = this.shadow.querySelector("#phylo-container");
        if (!container) {
            console.error("phylo-container not found");
            return;
        }
    
        const containerWidth = container.offsetWidth || window.innerWidth * 0.6;
        this.sharkTree = new SharkTree(speciesConfigs[speciesType][configKey], containerWidth, speciesType);
        const sharkTreeSvg = this.sharkTree.draw();
        this.sharkScreen = this.shadow.querySelector("#shark-screen");
        container.innerHTML = "";
        container.appendChild(sharkTreeSvg);
        this.lastContainerWidth = containerWidth;
        this.resetDropdowns();
        
        // Update breadcrumb
        this.updateBreadcrumb();
    
        // Update search label dynamically
        const searchLabel = this.shadow.querySelector("#search-container label");
        if (searchLabel) {
            searchLabel.textContent = `Search ${speciesType === SPECIES_TYPE.RAYS ? "Ray" : (speciesType === SPECIES_TYPE.SHARKS ? "Shark" : "Chimaera")}:`;
        }
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
        const speciesTypeDropdown = this.shadow.querySelector("#species-type-dropdown");
        const configDropdown = this.shadow.querySelector("#shark-config-dropdown");
        const speciesType = speciesTypeDropdown?.value || SPECIES_TYPE.SHARKS;
        const selectedConfig = configDropdown?.value || (speciesType === SPECIES_TYPE.RAYS ? "batomorphi" : (speciesType === SPECIES_TYPE.CHIMAERAS ? "holocephali" : "selachii"));
        this.initializeSharkTree(speciesType, selectedConfig);
    }

    initializeBreadcrumb() {
        const breadcrumbContainer = this.shadow.querySelector("#breadcrumb-container");
        if (breadcrumbContainer) {
            this.breadcrumbComponent = new BreadcrumbComponent(breadcrumbContainer);
            this.updateBreadcrumb();
        }
    }

    updateBreadcrumb() {
        if (this.breadcrumbComponent) {
            const breadcrumbItems = BreadcrumbComponent.createBreadcrumbForSharkTree(
                this.currentSpeciesType,
                this.currentConfig,
                this.currentSpecies
            );
            this.breadcrumbComponent.updateBreadcrumb(breadcrumbItems);
        }
    }

    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/

    html() {
        return `
            <style> ${this.css()} </style>
            <div id="app-container">
                <nav id="main-nav">
                    <a href="/fossil.html" class="btn btn-ghost">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Fossil Tree
                    </a>
                </nav>
                <div id="breadcrumb-container"></div>
                <div id="controls-container">
                    <div class="control-group" id="species-type-container">
                        <label for="species-type-dropdown">Species Type</label>
                        <select id="species-type-dropdown">
                            <option value="${SPECIES_TYPE.SHARKS}">Sharks</option>
                            <option value="${SPECIES_TYPE.RAYS}">Rays</option>
                            <option value="${SPECIES_TYPE.CHIMAERAS}">Chimaeras</option>
                        </select>
                    </div>
                    <div class="control-group" id="search-container">
                        <label for="shark-search">Search Species</label>
                        <input type="text" id="shark-search" placeholder="Enter common or binomial name" aria-describedby="search-label">
                        <div id="search-suggestions" class="suggestions"></div>
                    </div>
                    <div class="control-group" id="dropdown-container">
                        <label for="shark-config-dropdown">Configuration</label>
                        <select id="shark-config-dropdown"></select>
                    </div>
                    <div class="control-group" id="taxonomic-container">
                        <label for="taxonomic-dropdown">Taxonomic Level</label>
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
                    <div class="control-group" id="tag-container">
                        <label for="tag-dropdown">Tag Category</label>
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
                            <option value="analFin" class="shark-only">Has Anal Fin</option>
                            <option value="hasSpiracles">Has Spiracles</option>
                            <option value="hasFlattenedBody">Has Flattened Body</option>
                            <option value="nictitatingMembrane" class="shark-only">Has Nictitating Membrane</option>
                            <option value="caudalFinShape" class="shark-only">Caudal Fin Shape</option>
                            <option value="mouthInFrontOfEyes" class="shark-only">Has Mouth in Front of Eyes</option>
                            <option value="isBioluminescent">Bioluminescent</option>
                            <option value="hasDorsalFinSpines" class="shark-only">Has Dorsal Fin Spines</option>
                            <option value="hasProximalDorsalFins" class="shark-only">Has Proximal Dorsal Fins</option>
                            <option value="tailSpines" class="ray-only">Has Tail Spines</option>
                            <option value="electricOrgan" class="ray-only">Has Electric Organ</option>
                            <option value="venomousSpine" class="ray-only">Has Venomous Spine</option>
                            <option value="operculum" class="chimaera-only">Has Operculum</option>
                            <option value="snoutShape" class="chimaera-only">Snout Shape</option>
                        </select>
                        <select id="tag-value-dropdown">
                            <option value="">All</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <button id="info-button" class="btn btn-ghost" aria-label="How to use this app">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                                <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <div id="info-tooltip">
                        <strong>How to Use:</strong>
                        <ul>
                            <li>Type a species' common or scientific name in "Search Species" to find and highlight it.</li>
                            <li>Choose a species type (Sharks or Rays or Chimaeras) and group from "Configuration" to display its phylogenetic tree.</li>
                            <li>Select a "Taxonomic Level" (e.g., genus or family) to color matching species' nodes and paths.</li>
                            <li>Pick a "Tag Category" (e.g., conservation status) to add dashed lines to paths of species with that trait.</li>
                            <li>Click a species' node to view its details on the right panel.</li>
                            <li>Scroll to rotate, pinch to zoom, double-click to reset, or drag to pan the tree.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div id="shark-content">
                    <div id="phylo-container" class="fade-in"></div>
                    <div id="shark-screen-container">
                        <div id="shark-screen" class="fade-in"></div>
                        <div id="shark-image-container" class="fade-in"></div>
                    </div>
                </div>
            </div>
        `;
    }
    
    css() {
        return `
            :host {
                display: block;
                width: 100%;
                height: 100vh;
                font-family: var(--font-family-primary, 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
            }
            
            #main-nav {
                background: var(--color-white, #FFFFFF);
                padding: var(--space-4, 1rem);
                text-align: center;
                border-bottom: 1px solid var(--color-border-light, #E5E7EB);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
                font-size: var(--text-base, 1rem);
                font-weight: var(--font-weight-semibold, 600);
                position: sticky;
                top: 0;
                z-index: var(--z-sticky, 1020);
                backdrop-filter: blur(8px);
            }
            
            #main-nav a {
                color: var(--color-primary, #00688B);
                text-decoration: none;
                transition: all var(--transition-fast, 150ms ease-in-out);
                padding: var(--space-2, 0.5rem) var(--space-4, 1rem);
                border-radius: var(--radius-md, 0.375rem);
                font-weight: var(--font-weight-medium, 500);
            }
            
            #main-nav a:hover {
                color: var(--color-primary-hover, #004d6f);
                background-color: var(--color-primary-light, #E0F7FA);
            }
            
            #breadcrumb-container {
                background: var(--color-white, #FFFFFF);
                padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
                border-bottom: 1px solid var(--color-border-light, #E5E7EB);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
                font-size: var(--text-sm, 0.875rem);
                position: sticky;
                top: 0;
                z-index: var(--z-sticky, 1020);
                backdrop-filter: blur(8px);
            }
            
            .breadcrumb {
                background: var(--color-white, #FFFFFF);
                padding: var(--space-3, 0.75rem) var(--space-4, 1rem);
                border-bottom: 1px solid var(--color-border-light, #E5E7EB);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
                font-size: var(--text-sm, 0.875rem);
                position: sticky;
                top: 0;
                z-index: var(--z-sticky, 1020);
                backdrop-filter: blur(8px);
            }
            
            .breadcrumb-list {
                display: flex;
                align-items: center;
                list-style: none;
                margin: 0;
                padding: 0;
                flex-wrap: wrap;
                gap: var(--space-1, 0.25rem);
            }
            
            .breadcrumb-item {
                display: flex;
                align-items: center;
            }
            
            .breadcrumb-item:not(:last-child)::after {
                content: "›";
                margin: 0 var(--space-2, 0.5rem);
                color: var(--color-text-muted, #6B7280);
                font-weight: var(--font-weight-medium, 500);
            }
            
            .breadcrumb-link {
                color: var(--color-primary, #00688B);
                text-decoration: none;
                transition: all var(--transition-fast, 150ms ease-in-out);
                padding: var(--space-1, 0.25rem) var(--space-2, 0.5rem);
                border-radius: var(--radius-sm, 0.25rem);
                font-weight: var(--font-weight-medium, 500);
            }
            
            .breadcrumb-link:hover {
                color: var(--color-primary-hover, #004d6f);
                background-color: var(--color-primary-light, #E0F7FA);
            }
            
            .breadcrumb-current {
                color: var(--color-text-primary, #111827);
                font-weight: var(--font-weight-semibold, 600);
                padding: var(--space-1, 0.25rem) var(--space-2, 0.5rem);
                background-color: var(--color-bg-secondary, #F9FAFB);
                border-radius: var(--radius-sm, 0.25rem);
            }
            
            .breadcrumb-item.active .breadcrumb-current {
                background-color: var(--color-primary-light, #E0F7FA);
                color: var(--color-primary, #00688B);
            }
            
            @media (max-width: 768px) {
                #breadcrumb-container {
                    padding: var(--space-2, 0.5rem) var(--space-3, 0.75rem);
                    font-size: var(--text-xs, 0.75rem);
                }
                
                .breadcrumb-list {
                    gap: var(--space-1, 0.25rem);
                }
                
                .breadcrumb-item:not(:last-child)::after {
                    margin: 0 var(--space-1, 0.25rem);
                }
                
                .breadcrumb-link,
                .breadcrumb-current {
                    padding: var(--space-1, 0.25rem);
                }
            }
            
            @media (max-width: 480px) {
                #breadcrumb-container {
                    padding: var(--space-2, 0.5rem);
                }
                
                .breadcrumb-list {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--space-1, 0.25rem);
                }
                
                .breadcrumb-item:not(:last-child)::after {
                    display: none;
                }
                
                .breadcrumb-item:not(:last-child)::before {
                    content: "↳ ";
                    color: var(--color-text-muted, #6B7280);
                    margin-right: var(--space-1, 0.25rem);
                }
            }
            
            #app-container {
                position: relative;
                width: 100%;
                height: 100vh;
                display: flex;
                flex-direction: column;
                background: var(--color-bg-primary, #FFFFFF);
            }
            
            #controls-container {
                position: sticky;
                top: 0;
                z-index: var(--z-sticky, 1020);
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: var(--space-4, 1rem);
                padding: var(--space-4, 1rem);
                background: var(--color-white, #FFFFFF);
                border-bottom: 1px solid var(--color-border-light, #E5E7EB);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
                backdrop-filter: blur(8px);
            }
            
            .control-group {
                display: flex;
                flex-direction: column;
                gap: var(--space-1, 0.25rem);
                min-width: 0;
                position: relative;
            }
            
            .control-group label {
                font-size: var(--text-xs, 0.75rem);
                font-weight: var(--font-weight-medium, 500);
                color: var(--color-text-secondary, #6B7280);
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            
            #shark-search {
                padding: var(--space-2, 0.5rem) var(--space-3, 0.75rem);
                border: 1px solid var(--color-border-light, #E5E7EB);
                border-radius: var(--radius-md, 0.375rem);
                background: var(--color-white, #FFFFFF);
                font-size: var(--text-sm, 0.875rem);
                color: var(--color-text-primary, #1F2937);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
                width: 200px;
                transition: all var(--transition-fast, 150ms ease-in-out);
            }
            
            #shark-search:focus {
                outline: none;
                border-color: var(--color-primary, #00688B);
                box-shadow: 0 0 0 3px var(--color-primary-light, #E0F7FA);
            }
            
            #search-suggestions {
                position: absolute;
                top: calc(100% + var(--space-1, 0.25rem));
                left: 0;
                width: 200px;
                max-height: 200px;
                overflow-y: auto;
                background: var(--color-white, #FFFFFF);
                border: 1px solid var(--color-border-light, #E5E7EB);
                border-radius: var(--radius-md, 0.375rem);
                box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
                z-index: var(--z-dropdown, 1000);
                display: none;
            }
            
            #search-suggestions.visible {
                display: block;
                animation: slideUp var(--transition-normal, 250ms ease-out);
            }
            
            .suggestion-item {
                padding: var(--space-2, 0.5rem) var(--space-3, 0.75rem);
                font-size: var(--text-sm, 0.875rem);
                color: var(--color-text-primary, #1F2937);
                cursor: pointer;
                transition: background-color var(--transition-fast, 150ms ease-in-out);
                border-bottom: 1px solid var(--color-border-light, #E5E7EB);
            }
            
            .suggestion-item:last-child {
                border-bottom: none;
            }
            
            .suggestion-item:hover {
                background: var(--color-primary-light, #E0F7FA);
                color: var(--color-primary, #00688B);
            }
            
            .suggestion-item mark {
                background: var(--color-accent, #F9C74F);
                font-weight: var(--font-weight-semibold, 600);
                padding: 0 2px;
                border-radius: 2px;
            }
            
            select {
                padding: var(--space-2, 0.5rem) var(--space-3, 0.75rem);
                border: 1px solid var(--color-border-light, #E5E7EB);
                border-radius: var(--radius-md, 0.375rem);
                background: var(--color-white, #FFFFFF);
                font-size: var(--text-sm, 0.875rem);
                color: var(--color-text-primary, #1F2937);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
                min-width: 120px;
                max-width: 200px;
                cursor: pointer;
                transition: all var(--transition-fast, 150ms ease-in-out);
                appearance: none;
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
                background-position: right var(--space-2, 0.5rem) center;
                background-repeat: no-repeat;
                background-size: 1.5em 1.5em;
                padding-right: var(--space-10, 2.5rem);
            }
            
            select:hover {
                border-color: var(--color-primary, #00688B);
            }
            
            select:focus {
                outline: none;
                border-color: var(--color-primary, #00688B);
                box-shadow: 0 0 0 3px var(--color-primary-light, #E0F7FA);
            }
            
            #shark-content {
                display: flex;
                flex: 1;
                min-height: 0;
                height: 100%;
            }
            
            #phylo-container {
                position: relative;
                flex: 1;
                min-width: 0;
                min-height: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--color-white, #FFFFFF);
                border-radius: var(--radius-lg, 0.5rem);
                box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
                margin: var(--space-4, 1rem);
                overflow: hidden;
            }
            
            #shark-screen-container {
                position: relative;
                width: 700px;
                min-width: 700px;
                height: 100%;
                display: flex;
                flex-direction: row;
                gap: var(--space-4, 1rem);
                padding: var(--space-4, 1rem);
                margin-right: var(--space-4, 1rem);
                overflow: hidden;
            }
            
            #shark-screen {
                position: relative;
                flex: 1;
                height: 100%;
                min-height: 0;
                padding: var(--space-6, 1.5rem);
                background: var(--color-bg-secondary, #F9FAFB);
                border: 1px solid var(--color-border-light, #E5E7EB);
                border-radius: var(--radius-lg, 0.5rem);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
                overflow-y: auto;
                font-size: var(--text-sm, 0.875rem);
                line-height: var(--line-height-relaxed, 1.75);
                color: var(--color-text-primary, #1F2937);
                box-sizing: border-box;
            }
            
            #shark-image-container {
                position: relative;
                width: 300px;
                min-width: 300px;
                height: 100%;
                min-height: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--space-4, 1rem);
                background: var(--color-bg-secondary, #F9FAFB);
                border: 1px solid var(--color-border-light, #E5E7EB);
                border-radius: var(--radius-lg, 0.5rem);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
                box-sizing: border-box;
            }
            
            #shark-screen h2 {
                color: var(--color-primary, #00688B);
                margin: 0 0 var(--space-4, 1rem) 0;
                font-size: var(--text-xl, 1.25rem);
                font-weight: var(--font-weight-semibold, 600);
            }
            
            #shark-screen .section {
                margin-bottom: var(--space-4, 1rem);
            }
            
            #shark-screen .section strong {
                color: var(--color-text-primary, #1F2937);
                font-weight: var(--font-weight-semibold, 600);
            }
            
            #shark-screen ul {
                list-style-type: none;
                padding-left: var(--space-4, 1rem);
            }
            
            #shark-screen li {
                margin: var(--space-2, 0.5rem) 0;
                color: var(--color-text-secondary, #6B7280);
                position: relative;
            }
            
            #shark-screen li:before {
                content: "•";
                color: var(--color-primary, #00688B);
                position: absolute;
                left: calc(-1 * var(--space-4, 1rem));
                font-weight: var(--font-weight-bold, 700);
            }
            
            #shark-image-container img {
                max-width: 100%;
                max-height: 350px;
                width: 100%;
                object-fit: cover;
                border-radius: var(--radius-lg, 0.5rem);
                box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
                transition: all var(--transition-normal, 250ms ease-in-out);
                cursor: pointer;
            }
            
            #shark-image-container img:hover {
                transform: scale(1.02);
                box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
            }
            
            #shark-image-container .image-wrapper {
                position: relative;
                width: 100%;
                margin: 0;
            }
            
            #shark-image-container .image-caption {
                text-align: center;
                font-size: var(--text-xs, 0.75rem);
                color: var(--color-text-secondary, #6B7280);
                margin-top: var(--space-2, 0.5rem);
                font-style: italic;
                line-height: 1.4;
            }
            
            .image-loading {
                text-align: center;
                color: var(--color-text-secondary, #6B7280);
                font-size: var(--text-sm, 0.875rem);
                padding: var(--space-4, 1rem);
                background: var(--color-bg-secondary, #F9FAFB);
                border-radius: var(--radius-md, 0.375rem);
                border: 1px dashed var(--color-border-light, #E5E7EB);
            }
            
            .image-error {
                text-align: center;
                color: var(--color-error, #DC2626);
                font-size: var(--text-sm, 0.875rem);
                padding: var(--space-4, 1rem);
                background: var(--color-error-light, #FEF2F2);
                border-radius: var(--radius-md, 0.375rem);
                border: 1px solid var(--color-error-border, #FECACA);
            }
            
            /* Image Modal Styles */
            .image-modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(8px);
                animation: modalFadeIn var(--transition-normal, 250ms ease-in-out);
            }
            
            @keyframes modalFadeIn {
                from { 
                    opacity: 0; 
                    backdrop-filter: blur(0px);
                }
                to { 
                    opacity: 1; 
                    backdrop-filter: blur(8px);
                }
            }
            
            .image-modal-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 95vw;
                max-height: 95vh;
                width: auto;
                height: auto;
                object-fit: contain;
                border-radius: var(--radius-lg, 0.5rem);
                box-shadow: var(--shadow-2xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25));
                cursor: pointer;
                transition: transform var(--transition-normal, 250ms ease-in-out);
                animation: imageScaleIn var(--transition-normal, 250ms ease-out);
            }
            
            @keyframes imageScaleIn {
                from { 
                    transform: translate(-50%, -50%) scale(0.8);
                    opacity: 0;
                }
                to { 
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
            }
            
            .image-modal-content:hover {
                transform: translate(-50%, -50%) scale(1.02);
            }
            
            .image-modal-close {
                position: absolute;
                top: 20px;
                right: 20px;
                color: white;
                font-size: 24px;
                font-weight: bold;
                cursor: pointer;
                background: rgba(0, 0, 0, 0.7);
                border-radius: var(--radius-full, 9999px);
                width: 48px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all var(--transition-fast, 150ms ease-in-out);
                border: 2px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(4px);
                z-index: 1001;
            }
            
            .image-modal-close:hover {
                background: rgba(220, 38, 38, 0.9);
                border-color: rgba(255, 255, 255, 0.5);
                transform: scale(1.1);
            }
            
            .image-modal-close:active {
                transform: scale(0.95);
            }
            
            #info-button {
                width: 24px;
                height: 24px;
                border: none;
                background: none;
                padding: 0;
                cursor: help;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all var(--transition-fast, 150ms ease-in-out);
                border-radius: var(--radius-full, 9999px);
                align-self: flex-start;
            }
            
            #info-button:hover {
                transform: scale(1.1);
                background-color: var(--color-primary-light, #E0F7FA);
            }
            
            #info-button svg {
                stroke: var(--color-primary, #00688B);
            }
            
            #info-tooltip {
                display: none;
                position: absolute;
                top: calc(100% + var(--space-2, 0.5rem));
                left: 50%;
                transform: translateX(-50%);
                background: var(--color-white, #FFFFFF);
                color: var(--color-text-primary, #1F2937);
                padding: var(--space-4, 1rem);
                border-radius: var(--radius-lg, 0.5rem);
                border: 1px solid var(--color-border-light, #E5E7EB);
                font-size: var(--text-sm, 0.875rem);
                line-height: var(--line-height-relaxed, 1.75);
                width: 400px;
                max-width: 90vw;
                box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
                z-index: var(--z-tooltip, 1070);
                font-weight: var(--font-weight-normal, 400);
                opacity: 0;
                transition: opacity var(--transition-fast, 150ms ease-in-out), visibility var(--transition-fast, 150ms ease-in-out);
                pointer-events: none;
                visibility: hidden;
            }
            
            #info-tooltip strong {
                font-weight: var(--font-weight-semibold, 600);
                color: var(--color-primary, #00688B);
                display: block;
                margin-bottom: var(--space-2, 0.5rem);
            }
            
            #info-tooltip ul {
                list-style-type: none;
                padding-left: 0;
                margin: 0;
            }
            
            #info-tooltip li {
                position: relative;
                padding-left: var(--space-4, 1rem);
                margin-bottom: var(--space-2, 0.5rem);
            }
            
            #info-tooltip li:before {
                content: "•";
                color: var(--color-primary, #00688B);
                position: absolute;
                left: 0;
                font-size: var(--text-sm, 0.875rem);
                font-weight: var(--font-weight-bold, 700);
            }
            
            #info-button:hover + #info-tooltip {
                display: block;
                opacity: 1;
                visibility: visible;
                transition-delay: 0ms;
            }
            
            .shark-only, .ray-only, .chimaera-only { 
                display: none; 
            }
            
            .shark-only.active, .ray-only.active, .chimaera-only.active { 
                display: block; 
            }
            
            /* Responsive Design */
            @media (max-width: 1024px) {
                #shark-content {
                    flex-direction: column;
                    height: 100%;
                }
                
                #phylo-container {
                    width: 100%;
                    flex: 1;
                    min-height: 0;
                    margin: var(--space-2, 0.5rem);
                }
                
                #shark-screen-container {
                    width: 100%;
                    min-width: unset;
                    flex: 1;
                    min-height: 0;
                    margin: var(--space-2, 0.5rem);
                    padding: var(--space-2, 0.5rem);
                    flex-direction: column;
                }
                
                #shark-image-container {
                    width: 100%;
                    min-width: unset;
                    height: auto;
                    min-height: 0;
                    margin-top: var(--space-4, 1rem);
                }
                
                #controls-container {
                    flex-direction: column;
                    align-items: stretch;
                    gap: var(--space-3, 0.75rem);
                }
                
                .control-group {
                    width: 100%;
                }
                
                #shark-search {
                    width: 100%;
                }
                
                select {
                    width: 100%;
                    max-width: none;
                }
            }
            
            @media (max-width: 768px) {
                #main-nav {
                    padding: var(--space-3, 0.75rem);
                }
                
                #controls-container {
                    padding: var(--space-3, 0.75rem);
                }
                
                #phylo-container {
                    flex: 1;
                    min-height: 0;
                    margin: var(--space-1, 0.25rem);
                }
                
                #shark-screen-container {
                    flex: 1;
                    min-height: 0;
                    margin: var(--space-1, 0.25rem);
                    padding: var(--space-1, 0.25rem);
                }
                
                #shark-screen {
                    padding: var(--space-4, 1rem);
                    font-size: var(--text-xs, 0.75rem);
                }
                
                #shark-screen img {
                    max-height: 200px;
                    margin: var(--space-3, 0.75rem) 0;
                }
                
                #shark-screen h2 {
                    font-size: var(--text-lg, 1.125rem);
                }
            }
            
            @media (max-width: 480px) {
                #main-nav a {
                    font-size: var(--text-sm, 0.875rem);
                    padding: var(--space-1, 0.25rem) var(--space-2, 0.5rem);
                }
                
                .control-group label {
                    font-size: 10px;
                }
                
                #shark-search, select {
                    font-size: var(--text-xs, 0.75rem);
                    padding: var(--space-1, 0.25rem) var(--space-2, 0.5rem);
                }
                
                #shark-screen img {
                    max-height: 150px;
                    margin: var(--space-2, 0.5rem) 0;
                }
            }
            
            /* Loading and Animation States */
            .loading {
                opacity: 0.6;
                pointer-events: none;
            }
            
            .fade-in {
                animation: fadeIn var(--transition-normal, 250ms ease-in-out);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
    }

    /*----------------------------------------|
    |                HANDLERS                 |
    |----------------------------------------*/
    setupDropdown() {
        const speciesTypeDropdown = this.shadow.querySelector("#species-type-dropdown");
        const configDropdown = this.shadow.querySelector("#shark-config-dropdown");
        const tagDropdown = this.shadow.querySelector("#tag-dropdown");
    
        const updateConfigDropdown = (speciesType) => {
            configDropdown.innerHTML = Object.keys(speciesConfigs[speciesType]).map(configKey =>
                `<option value="${configKey}">${StringUtils.capitalizeFirstLetter(configKey)}</option>`
            ).join("");
            this.initializeSharkTree(speciesType, configDropdown.value);
    
            // Toggle species-specific tag options
            const sharkOptions = tagDropdown.querySelectorAll(".shark-only");
            const rayOptions = tagDropdown.querySelectorAll(".ray-only");
            const chimaeraOptions = tagDropdown.querySelectorAll(".chimaera-only");
            sharkOptions.forEach(option => {
                option.classList.toggle("active", speciesType === SPECIES_TYPE.SHARKS);
            });
            rayOptions.forEach(option => {
                option.classList.toggle("active", speciesType === SPECIES_TYPE.RAYS);
            });
            chimaeraOptions.forEach(option => {
                option.classList.toggle("active", speciesType === SPECIES_TYPE.CHIMAERAS);
            });
        };
    
        updateConfigDropdown(SPECIES_TYPE.SHARKS);
    
        speciesTypeDropdown.addEventListener("change", (event) => {
            const speciesType = event.target.value;
            updateConfigDropdown(speciesType);
        });
    
        configDropdown.addEventListener("change", (event) => {
            const speciesType = speciesTypeDropdown.value;
            const selectedConfig = event.target.value;
            this.initializeSharkTree(speciesType, selectedConfig);
        });
    }

    setupEventListeners() {
        window.addEventListener("select-shark", this.selectSharkHandler.bind(this));
    
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
            mouthInFrontOfEyes: [MOUTH_IN_FRONT_OF_EYES.YES, MOUTH_IN_FRONT_OF_EYES.NO],
            tailSpines: [TAIL_SPINES.YES, TAIL_SPINES.NO],
            electricOrgan: [ELECTRIC_ORGAN.YES, ELECTRIC_ORGAN.NO],
            venomousSpine: [VENOMOUS_SPINE.YES, VENOMOUS_SPINE.NO],
            operculum: [OPERCULUM.YES, OPERCULUM.NO],
            snoutShape: [SNOUT_SHAPE.SHORT, SNOUT_SHAPE.ELONGATED, SNOUT_SHAPE.PLOUGH_LIKE],
        };
    
        tagDropdown.addEventListener("change", (event) => {
            const category = event.target.value;
            if (category && this.sharkTree) {
                const categoryData = this.sharkTree.tagCategories.get(category);
                const values = new Set(categoryData?.species.flatMap(s => s.tags.filter(tag => this.sharkTree.getTagCategory(tag) === category)));
                const sortedValues = Array.from(values).sort((a, b) => {
                    const order = categoryOrders[category];
                    if (order) {
                        const indexA = order.indexOf(a);
                        const indexB = order.indexOf(b);
                        if (indexA === -1 && indexB === -1) return a.localeCompare(b);
                        if (indexA === -1) return 1;
                        if (indexB === -1) return -1;
                        return indexA - indexB;
                    }
                    return a.localeCompare(b);
                });
                tagValueDropdown.innerHTML = `
                    <option value="">All</option>
                    ${sortedValues.map(v => {
                        let displayText = v;
                        if (v.includes("Yes") || v === BIOLUMINESCENT.YES || v === MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES) {
                            displayText = "Yes";
                        } else if ((v.includes("No") && v !== BEHAVIOR.NONE) || v === BIOLUMINESCENT.NO || v === MOUTH_IN_FRONT_OF_EYES.MOUTH_NOT_IN_FRONT_OF_EYES) {
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
        this.currentSpecies = selectedShark.commonName || selectedShark.binomialName;
        
        if (this.sharkScreen) {
            const allSpecies = this.sharkTree.getSharkSpeciesList();
            this.sharkScreen.innerHTML = selectedShark.getFormattedString(allSpecies);
            
            // Clear previous image
            const imageContainer = this.shadow.querySelector("#shark-image-container");
            if (imageContainer) {
                imageContainer.innerHTML = "";
            }
            
            if (selectedShark.imageUrl) {
                this.addSharkImage(selectedShark);
            }
        }
        
        // Update breadcrumb with selected species
        this.updateBreadcrumb();
        this.sharkTree.updateSelection(selectedShark);
    }
    
    addSharkImage(selectedShark) {
        console.log("addSharkImage called for:", selectedShark.commonName);
        const imageContainer = this.shadow.querySelector("#shark-image-container");
        if (!imageContainer) {
            console.log("Image container not found!");
            return;
        }
        
        const imageWrapper = document.createElement("div");
        imageWrapper.className = "image-wrapper";
        
        // Create loading state
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "image-loading";
        loadingDiv.textContent = "Loading image...";
        imageWrapper.appendChild(loadingDiv);
        
        // Create image element
        const sharkImg = document.createElement("img");
        sharkImg.style.display = "none";
        sharkImg.alt = `${selectedShark.commonName} image`;
        
        // Use the direct mapped URL
        const imageUrl = this.getDirectImageUrl(selectedShark.imageUrl);
        
        // Set up image loading with proper event handling
        sharkImg.onload = () => {
            console.log("Image loaded successfully:", sharkImg.src);
            loadingDiv.remove();
            sharkImg.style.display = "block";
        };
        
        sharkImg.onerror = (error) => {
            console.log("Image failed to load:", sharkImg.src, error);
            loadingDiv.textContent = "Image not available";
            loadingDiv.className = "image-error";
        };
        
        // Set the image source
        sharkImg.src = imageUrl;
        
        // Add click handler for modal
        sharkImg.addEventListener("click", (event) => {
            console.log("Image clicked!", selectedShark.commonName, sharkImg.src);
            event.stopPropagation();
            this.showImageModal(sharkImg.src, selectedShark.commonName);
        });
        
        // Create caption
        const caption = document.createElement("p");
        caption.className = "image-caption";
        caption.textContent = `${selectedShark.commonName} (${selectedShark.binomialName})`;
        
        // Image source is set in tryNextUrl() function
        
        imageWrapper.appendChild(sharkImg);
        imageWrapper.appendChild(caption);
        imageContainer.appendChild(imageWrapper);
    }
    
    getDirectImageUrl(webpackUrl) {
        // Extract filename from webpack URL
        const filename = webpackUrl.split('/').pop();
        
        // Map known filenames to their direct paths
        const imageMap = {
            'carcharodon-carcharias.png': '/images/lamniformes/lamnidae/carcharodon-carcharias.png',
            'isurus-oxyrinchus.png': '/images/lamniformes/lamnidae/isurus-oxyrinchus.png',
            'isurus-paucus.png': '/images/lamniformes/lamnidae/isurus-paucus.png',
            'alopias-pelagicus.jpeg': '/images/lamniformes/alopias-pelagicus.jpeg',
            'alopias-superciliosus.jpg': '/images/lamniformes/alopias-superciliosus.jpg',
            'alopias-vulpinus.jpeg': '/images/lamniformes/alopias-vulpinus.jpeg',
            'scylliogaleus-quecketti.jpg': '/images/carcharhiniformes/triakidae/scylliogaleus-quecketti.jpg'
        };
        
        const directPath = imageMap[filename];
        
        return directPath || webpackUrl;
    }
    
    showImageModal(imageUrl, speciesName) {
        console.log("showImageModal called with:", imageUrl, speciesName);
        
        // Remove existing modal if any
        const existingModal = document.querySelector(".image-modal");
        if (existingModal) {
            existingModal.remove();
        }
        
        // Create modal
        const modal = document.createElement("div");
        modal.className = "image-modal";
        modal.style.display = "block";
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        modal.style.zIndex = "9999";
        console.log("Modal created:", modal);
        
        // Create modal content
        const modalImg = document.createElement("img");
        modalImg.className = "image-modal-content";
        modalImg.src = imageUrl;
        modalImg.alt = `${speciesName} - Full size`;
        modalImg.style.position = "absolute";
        modalImg.style.top = "50%";
        modalImg.style.left = "50%";
        modalImg.style.transform = "translate(-50%, -50%)";
        modalImg.style.maxWidth = "95vw";
        modalImg.style.maxHeight = "95vh";
        modalImg.style.objectFit = "contain";
        modalImg.style.borderRadius = "0.5rem";
        modalImg.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
        modalImg.style.cursor = "pointer";
        
        // Create close button
        const closeBtn = document.createElement("button");
        closeBtn.className = "image-modal-close";
        closeBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "24px";
        closeBtn.style.right = "24px";
        closeBtn.style.color = "white";
        closeBtn.style.background = "rgba(0, 0, 0, 0.8)";
        closeBtn.style.border = "none";
        closeBtn.style.borderRadius = "8px";
        closeBtn.style.width = "40px";
        closeBtn.style.height = "40px";
        closeBtn.style.display = "flex";
        closeBtn.style.alignItems = "center";
        closeBtn.style.justifyContent = "center";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.transition = "all 150ms ease-in-out";
        closeBtn.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        closeBtn.style.zIndex = "10000";
        closeBtn.style.backdropFilter = "blur(8px)";
        // Add hover effects
        closeBtn.addEventListener("mouseenter", () => {
            closeBtn.style.background = "rgba(220, 38, 38, 0.9)";
            closeBtn.style.transform = "scale(1.05)";
        });
        
        closeBtn.addEventListener("mouseleave", () => {
            closeBtn.style.background = "rgba(0, 0, 0, 0.8)";
            closeBtn.style.transform = "scale(1)";
        });
        
        closeBtn.addEventListener("click", () => {
            modal.remove();
        });
        
        // Close modal when clicking on image or background
        modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target === modalImg) {
                modal.remove();
            }
        });
        
        // Close modal with Escape key
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                modal.remove();
                document.removeEventListener("keydown", handleEscape);
            }
        };
        document.addEventListener("keydown", handleEscape);
        
        modal.appendChild(modalImg);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
        console.log("Modal added to body:", document.body.contains(modal));
        console.log("Modal display style:", modal.style.display);
        console.log("Modal computed style:", window.getComputedStyle(modal).display);
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
            
            // Clear previous image
            const imageContainer = this.shadow.querySelector("#shark-image-container");
            if (imageContainer) {
                imageContainer.innerHTML = "";
            }
            
            if (shark.imageUrl) {
                this.addSharkImage(shark);
            }
        }
        this.sharkTree.updateSelection(shark);
        window.dispatchEvent(new CustomEvent("select-shark", { 
            detail: { sharkSpecies: shark } 
        }));
    }
}

customElements.define("shark-tree-component", SharkTreeComponent);