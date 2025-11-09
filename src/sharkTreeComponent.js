import "core-js/stable";
import "regenerator-runtime/runtime";
import { ANAL_FIN, BEHAVIOR, BIOLUMINESCENT, CONSERVATION_STATUS, DEPTH_ZONE, DORSAL_FIN_SPINES, ELECTRIC_ORGAN, FLATTENED_BODY, MOUTH_IN_FRONT_OF_EYES, NICTITATING_MEMBRANE, NUM_DORSAL_FINS, NUM_GILLS, OPERCULUM, PROXIMAL_DORSAL_FINS, SNOUT_SHAPE, SPECIES_TYPE, SPIRACLES, TAIL_SPINES, VENOMOUS_SPINE } from "./constants/enums";
import { BreadcrumbComponent } from "./components/breadcrumb";
import { speciesDataLoader } from "./utils/data-loader";
// Removed imageLoader import to avoid regeneratorRuntime issues
import treeOfSharksImage from "./images/tree-of-sharks.webp";
import trilobiteImage from "./images/trilobite.webp";

// Dynamic species configuration loader
class SpeciesConfigManager {
    constructor() {
        this.loadedConfigs = new Map();
    }

    async getSpeciesConfig(speciesType, configKey) {
        const cacheKey = `${speciesType}-${configKey}`;
        
        // Return cached config if available
        if (this.loadedConfigs.has(cacheKey)) {
            return this.loadedConfigs.get(cacheKey);
        }

        console.log(`Loading config for ${speciesType}/${configKey}`);
        
        try {
            // Use the actual data loader to load the configuration
            const config = await speciesDataLoader.loadSpeciesConfig(speciesType, configKey);
            
            // Cache the loaded configuration
            this.loadedConfigs.set(cacheKey, config);
            
            return config;
        } catch (error) {
            console.error(`Failed to load config for ${speciesType}/${configKey}:`, error);
            return null;
        }
    }

    async preloadCriticalConfigs() {
        // Preload the most commonly used configurations
        const criticalConfigs = {
            [SPECIES_TYPE.SHARKS]: ['selachii', 'galeomorphii', 'squalomorphii'],
            [SPECIES_TYPE.RAYS]: ['batomorphi', 'rajiformes'],
            [SPECIES_TYPE.CHIMAERAS]: ['holocephali']
        };

        console.log('Critical configs preload requested');
        
        // Actually preload the configurations
        for (const [speciesType, configKeys] of Object.entries(criticalConfigs)) {
            for (const configKey of configKeys) {
                try {
                    await this.getSpeciesConfig(speciesType, configKey);
                } catch (error) {
                    console.warn(`Failed to preload ${speciesType}/${configKey}:`, error);
                }
            }
        }
    }

    getCacheStats() {
        return { cached: this.loadedConfigs.size, loading: 0 };
    }
}

const speciesConfigManager = new SpeciesConfigManager();

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
        this.speciesDataLoader = speciesDataLoader;
        
        // Initialize lazy loading observer
        this.imageObserver = null;
        this.pendingImages = new Set(); // Track images waiting to load
        this.currentSharkImages = new Set(); // Track current shark's images
    }

    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

    async connectedCallback() {
        this.render();
        this.initializeBreadcrumb();
        
        // Setup lazy loading observer after shadow DOM is ready
        this.setupLazyImageObserver();
        
        // Preload critical configurations - disabled to prevent loading all species on startup
        // await speciesConfigManager.preloadCriticalConfigs();
        
        await this.initializeSharkTree();
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
        if (this.imageObserver) {
            this.imageObserver.disconnect();
            this.imageObserver = null;
        }
        // Clear image tracking sets
        this.pendingImages.clear();
        this.currentSharkImages.clear();
        this.sharkTree?.destroy();
    }

    render() {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }

    async initializeSharkTree(speciesType = SPECIES_TYPE.SHARKS, configKey = "selachii") {
    
        // Validate speciesType
        if (!Object.values(SPECIES_TYPE).includes(speciesType)) {
            console.error(`Invalid speciesType: ${speciesType}`);
            speciesType = SPECIES_TYPE.SHARKS; // Fallback
        }
    
        // Validate configKey using available configs
        const availableConfigs = this.speciesDataLoader.getAvailableConfigs(speciesType);
        if (!availableConfigs.includes(configKey)) {
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
        
        // Load configuration dynamically
        try {
            const config = await speciesConfigManager.getSpeciesConfig(speciesType, configKey);
            if (!config) {
                console.error(`Configuration for ${speciesType}/${configKey} is null or undefined`);
                return;
            }
            this.sharkTree = new SharkTree(config, containerWidth, speciesType);
        } catch (error) {
            console.error(`Failed to load configuration for ${speciesType}/${configKey}:`, error);
            return;
        }
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
        const taxonomicLevelDropdown = this.shadow.querySelector("#taxonomic-level-dropdown");
        const taxonomicGroupDropdown = this.shadow.querySelector("#taxonomic-group-dropdown");
        const tagDropdown = this.shadow.querySelector("#tag-dropdown");
        const tagValueDropdown = this.shadow.querySelector("#tag-value-dropdown");
        taxonomicLevelDropdown.value = "";
        taxonomicGroupDropdown.innerHTML = "<option value=''>Select a level first</option>";
        taxonomicGroupDropdown.disabled = true;
        tagDropdown.value = "";
        tagValueDropdown.innerHTML = '<option value="">Select a category first</option>';
        tagValueDropdown.disabled = true;
        this.updateTaxonomicValues();
    }

    updateTaxonomicValues() {
        const taxonomicLevelDropdown = this.shadow.querySelector("#taxonomic-level-dropdown");
        const taxonomicGroupDropdown = this.shadow.querySelector("#taxonomic-group-dropdown");
        const level = taxonomicLevelDropdown.value;
    
        if (level && this.sharkTree) {
            const levelData = this.sharkTree.taxonomicLevels.get(level);
            const values = new Set(levelData?.species.map(s => s[level]).filter(v => v));
            taxonomicGroupDropdown.innerHTML = `
                <option value="">All</option>
                ${Array.from(values).map(v => `<option value="${v}">${v}</option>`).join("")}
            `;
            taxonomicGroupDropdown.disabled = false;
        } else {
            taxonomicGroupDropdown.innerHTML = "<option value=''>Select a level first</option>";
            taxonomicGroupDropdown.disabled = true;
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

        const handleResize = debounce(async () => {
            const currentWidth = container.offsetWidth;
            // Only reinitialize if width changed significantly
            if (this.lastContainerWidth === null || Math.abs(currentWidth - this.lastContainerWidth) > 5) {
                await this.reinitializeSharkTree();
                this.lastContainerWidth = currentWidth;
            }
        }, 200);

        this.resizeObserver = new ResizeObserver(handleResize);
        this.resizeObserver.observe(container);
    }

    setupLazyImageObserver() {
        // Check if IntersectionObserver is supported
        if (typeof IntersectionObserver === 'undefined') {
            console.warn('IntersectionObserver not supported, images will load immediately');
            return;
        }

        this.imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const dataSrc = img.dataset.src;
                    
                    if (dataSrc && this.pendingImages.has(dataSrc)) {
                        console.log('Lazy loading image:', dataSrc);
                        
                        // Load the image immediately
                        this.loadImageImmediately(img, dataSrc, img.parentElement.querySelector('.image-loading'));
                        
                        // Clean up
                        this.pendingImages.delete(dataSrc);
                        this.imageObserver.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading 50px before image enters viewport
            threshold: 0.1
        });
    }

    async reinitializeSharkTree() {
        const speciesTypeDropdown = this.shadow.querySelector("#species-type-dropdown");
        const configDropdown = this.shadow.querySelector("#shark-config-dropdown");
        const speciesType = speciesTypeDropdown?.value || SPECIES_TYPE.SHARKS;
        const selectedConfig = configDropdown?.value || (speciesType === SPECIES_TYPE.RAYS ? "batomorphi" : (speciesType === SPECIES_TYPE.CHIMAERAS ? "holocephali" : "selachii"));
        await this.initializeSharkTree(speciesType, selectedConfig);
    }

    initializeBreadcrumb() {
        const breadcrumbContainer = this.shadow.querySelector(".breadcrumb-content");
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
                <div id="breadcrumb-container">
                    <div class="breadcrumb-header">
                        <div class="breadcrumb-content"></div>
                        <div class="breadcrumb-center">
                            <img src="${treeOfSharksImage}" alt="Tree of Sharks" class="tree-image">
                        </div>
                        <div class="breadcrumb-actions">
                            <a href="/fossil.html" class="btn btn-ghost">
                                <img src="${trilobiteImage}" alt="Fossil Tree" width="20" height="20">
                                Fossil Tree
                            </a>
                        </div>
                    </div>
                </div>
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
                        <label for="taxonomic-level-dropdown">Taxonomic Level</label>
                        <select id="taxonomic-level-dropdown">
                            <option value="">None</option>
                            <option value="genus">Genus</option>
                            <option value="family">Family</option>
                            <option value="order">Order</option>
                            <option value="superorder">Superorder</option>
                            <option value="subdivision">Subdivision</option>
                        </select>
                        <select id="taxonomic-group-dropdown" disabled>
                            <option value="">Select a level first</option>
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
                            <option value="depthZone">Depth Zone</option>
                            <option value="hasDorsalFinSpines" class="shark-only">Has Dorsal Fin Spines</option>
                            <option value="hasProximalDorsalFins" class="shark-only">Has Proximal Dorsal Fins</option>
                            <option value="tailSpines" class="ray-only">Has Tail Spines</option>
                            <option value="electricOrgan" class="ray-only">Has Electric Organ</option>
                            <option value="venomousSpine" class="ray-only">Has Venomous Spine</option>
                            <option value="operculum" class="chimaera-only">Has Operculum</option>
                            <option value="snoutShape" class="chimaera-only">Snout Shape</option>
                        </select>
                        <select id="tag-value-dropdown" disabled>
                            <option value="">Select a category first</option>
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
                            <li>Select a "Taxonomic Level" (e.g., genus or family) to add color and line thickness to matching species' nodes and paths.</li>
                            <li>Pick a "Tag Category" (e.g., conservation status) to opacity focus on paths of species with that trait.</li>
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
            
            .breadcrumb-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                position: relative;
            }
            
            .breadcrumb-content {
                flex: 1;
            }
            
            .breadcrumb-center {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .tree-image {
                max-height: 40px;
                width: auto;
                object-fit: contain;
            }
            
            .breadcrumb-actions {
                display: flex;
                align-items: center;
                gap: var(--space-2, 0.5rem);
            }
            
            .breadcrumb-actions .btn {
                color: var(--color-primary, #00688B);
                text-decoration: none;
                transition: all var(--transition-fast, 150ms ease-in-out);
                padding: var(--space-2, 0.5rem) var(--space-4, 1rem);
                border-radius: var(--radius-md, 0.375rem);
                font-weight: var(--font-weight-medium, 500);
                display: inline-flex;
                align-items: center;
                gap: var(--space-2, 0.5rem);
                font-size: var(--text-sm, 0.875rem);
            }
            
            .breadcrumb-actions .btn:hover {
                color: var(--color-primary-hover, #004d6f);
                background-color: var(--color-primary-light, #E0F7FA);
            }
            
            .breadcrumb {
                background: transparent;
                padding: 0;
                border-bottom: none;
                box-shadow: none;
                font-size: var(--text-sm, 0.875rem);
                position: static;
                z-index: auto;
                backdrop-filter: none;
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
                width: 202px;
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
                overflow-y: auto;
                overflow-x: hidden;
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
            
            /* Multiple images container */
            #shark-image-container .images-container {
                display: flex;
                flex-direction: column;
                gap: var(--space-3, 0.75rem);
                width: 100%;
                max-height: 100%;
                overflow-y: auto;
                overflow-x: hidden;
            }
            
            /* Single image - keep centered */
            #shark-image-container .images-container.single-image {
                justify-content: center;
            }
            
            /* Multiple images - start from top */
            #shark-image-container .images-container.multiple-images {
                justify-content: flex-start;
            }
            
            /* Stacked images styling */
            #shark-image-container .image-wrapper.stacked-image {
                position: relative;
                margin-bottom: var(--space-2, 0.5rem);
            }
            
            #shark-image-container .image-wrapper.stacked-image:not(:last-child) {
                margin-bottom: var(--space-3, 0.75rem);
            }
            
            #shark-image-container .image-wrapper.stacked-image img {
                max-height: 200px;
                width: 100%;
                object-fit: cover;
                border-radius: var(--radius-md, 0.375rem);
                box-shadow: var(--shadow-sm, 0 1px 2px 0 rgba(0, 0, 0, 0.05));
            }
            
            #shark-image-container .image-wrapper.stacked-image img:hover {
                transform: scale(1.01);
                box-shadow: var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1));
            }
            
            /* Custom scrollbar for image container */
            #shark-image-container::-webkit-scrollbar {
                width: 6px;
            }
            
            #shark-image-container::-webkit-scrollbar-track {
                background: var(--color-bg-tertiary, #F3F4F6);
                border-radius: var(--radius-sm, 0.25rem);
            }
            
            #shark-image-container::-webkit-scrollbar-thumb {
                background: var(--color-border-dark, #9CA3AF);
                border-radius: var(--radius-sm, 0.25rem);
            }
            
            #shark-image-container::-webkit-scrollbar-thumb:hover {
                background: var(--color-text-tertiary, #6B7280);
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
            
            /* Lazy loading styles */
            .lazy-image {
                opacity: 0.7;
                transition: opacity 0.3s ease-in-out;
            }
            
            .lazy-image.loaded {
                opacity: 1;
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
            
            /* IUCN Conservation Status Graphics */
            .conservation-status .iucn-status {
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                margin-top: 0.25rem;
            }
            
            .conservation-status .iucn-text {
                font-size: 0.875rem;
                font-weight: 500;
            }
            
            .conservation-status svg {
                display: inline-block !important;
                vertical-align: middle;
                border-radius: 0.25rem;
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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
    
        const updateConfigDropdown = async (speciesType) => {
            const availableConfigs = this.speciesDataLoader.getAvailableConfigs(speciesType);
            configDropdown.innerHTML = availableConfigs.map(configKey =>
                `<option value="${configKey}">${StringUtils.capitalizeFirstLetter(configKey)}</option>`
            ).join("");
            
            // Set default config based on species type
            let defaultConfig = configDropdown.value; // Default to first option
            if (speciesType === SPECIES_TYPE.CHIMAERAS) {
                defaultConfig = 'holocephali';
            }
            configDropdown.value = defaultConfig;
            
            await this.initializeSharkTree(speciesType, configDropdown.value);
    
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
    
        configDropdown.addEventListener("change", async (event) => {
            const speciesType = speciesTypeDropdown.value;
            const selectedConfig = event.target.value;
            await this.initializeSharkTree(speciesType, selectedConfig);
        });
    }

    setupEventListeners() {
        window.addEventListener("select-shark", this.selectSharkHandler.bind(this));
    
        const taxonomicLevelDropdown = this.shadow.querySelector("#taxonomic-level-dropdown");
        const taxonomicGroupDropdown = this.shadow.querySelector("#taxonomic-group-dropdown");
        
        taxonomicLevelDropdown.addEventListener("change", (event) => {
            const level = event.target.value;
            if (level && this.sharkTree) {
                const levelData = this.sharkTree.taxonomicLevels.get(level);
                const values = new Set(levelData?.species.map(s => s[level]).filter(v => v));
                taxonomicGroupDropdown.innerHTML = `
                    <option value="">All</option>
                    ${Array.from(values).map(v => `<option value="${v}">${v}</option>`).join("")}
                `;
                taxonomicGroupDropdown.disabled = false;
                this.sharkTree.highlightTaxonomicLevel(level);
            } else {
                taxonomicGroupDropdown.innerHTML = '<option value="">Select a level first</option>';
                taxonomicGroupDropdown.disabled = true;
                this.sharkTree?.clearAllTaxonomicHighlights();
            }
        });
    
        taxonomicGroupDropdown.addEventListener("change", (event) => {
            const level = taxonomicLevelDropdown.value;
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
            depthZone: [
                DEPTH_ZONE.SHALLOW_WATER,
                DEPTH_ZONE.MID_WATER,
                DEPTH_ZONE.DEEP_WATER,
                DEPTH_ZONE.ABYSSAL,
                DEPTH_ZONE.HADAL
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
                
                // Define binary categories that should only have Yes/No options (no All option)
                const binaryCategories = [
                    'analFin', 'hasSpiracles', 'hasFlattenedBody', 'nictitatingMembrane', 
                    'hasProximalDorsalFins', 'isBioluminescent', 'tailSpines', 
                    'electricOrgan', 'venomousSpine', 'operculum'
                ];
                
                const isBinaryCategory = binaryCategories.includes(category);
                
                tagValueDropdown.innerHTML = `
                    ${!isBinaryCategory ? '<option value="">All</option>' : ''}
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
                
                // For binary categories, default to "Yes" option
                if (isBinaryCategory) {
                    const yesOption = sortedValues.find(v => 
                        v.includes("Yes") || v === BIOLUMINESCENT.YES || v === MOUTH_IN_FRONT_OF_EYES.MOUTH_IN_FRONT_OF_EYES
                    );
                    if (yesOption) {
                        tagValueDropdown.value = yesOption;
                        // Manually trigger the tag filtering for binary categories
                        this.sharkTree.highlightTagCategory(category, yesOption);
                    }
                } else {
                    // For non-binary categories, just highlight the category without a specific value
                    this.sharkTree.highlightTagCategory(category);
                }
                
                tagValueDropdown.disabled = false;
            } else {
                tagValueDropdown.innerHTML = '<option value="">Select a category first</option>';
                tagValueDropdown.disabled = true;
                this.sharkTree?.clearAllTagHighlights();
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
            
            if (selectedShark.imageUrl || (selectedShark.imageUrls && selectedShark.imageUrls.length > 0)) {
                this.addSharkImage(selectedShark);
            }
        }
        
        // Update breadcrumb with selected species
        this.updateBreadcrumb();
        this.sharkTree.updateSelection(selectedShark);
    }
    
    /**
     * Add shark/ray/chimaera images with lazy loading support
     * Images are loaded only when they come into view, improving performance
     */
    addSharkImage(selectedShark) {
        const imageContainer = this.shadow.querySelector("#shark-image-container");
        if (!imageContainer) {
            console.log("Image container not found!");
            return;
        }
        
        // Clear previous current shark images
        this.currentSharkImages.clear();
        
        // Determine which images to display
        const imagesToDisplay = [];
        if (selectedShark.imageUrls && selectedShark.imageUrls.length > 0) {
            imagesToDisplay.push(...selectedShark.imageUrls);
        } else if (selectedShark.imageUrl) {
            imagesToDisplay.push(selectedShark.imageUrl);
        }
        
        if (imagesToDisplay.length === 0) {
            return;
        }
        
        // Mark these as current shark images for immediate loading
        imagesToDisplay.forEach(url => this.currentSharkImages.add(url));
        
        // Create main image wrapper
        const mainImageWrapper = document.createElement("div");
        mainImageWrapper.className = "images-container";
        
        // Add class based on number of images for styling
        if (imagesToDisplay.length === 1) {
            mainImageWrapper.classList.add("single-image");
        } else {
            mainImageWrapper.classList.add("multiple-images");
        }
        
        // Create caption (shared for all images)
        const caption = document.createElement("p");
        caption.className = "image-caption";
        caption.innerHTML = `${selectedShark.commonName}<br>(${selectedShark.binomialName})`;
        
        // Create individual image wrappers with priority loading
        imagesToDisplay.forEach((imageUrl, index) => {
            console.log('Creating image wrapper for:', imageUrl);
            
            const imageWrapper = document.createElement("div");
            imageWrapper.className = "image-wrapper";
            if (imagesToDisplay.length > 1) {
                imageWrapper.classList.add("stacked-image");
            }
            
            // Create loading state
            const loadingDiv = document.createElement("div");
            loadingDiv.className = "image-loading";
            loadingDiv.textContent = "Loading image...";
            imageWrapper.appendChild(loadingDiv);
            
            // Create image element
            const sharkImg = document.createElement("img");
            sharkImg.alt = `${selectedShark.commonName} image ${index + 1}`;
            sharkImg.style.display = "block";
            sharkImg.style.opacity = "0";
            sharkImg.style.transition = "opacity 0.3s ease-in-out";
            sharkImg.style.width = "100%";
            sharkImg.style.height = "auto";
            
            // Add click handler for modal
            sharkImg.addEventListener("click", (event) => {
                event.stopPropagation();
                this.showImageModal(imageUrl, selectedShark.commonName);
            });
            
            imageWrapper.appendChild(sharkImg);
            mainImageWrapper.appendChild(imageWrapper);
            
            // Load current shark's images immediately (priority)
            if (this.currentSharkImages.has(imageUrl)) {
                console.log('Loading current shark image immediately:', imageUrl);
                this.loadImageImmediately(sharkImg, imageUrl, loadingDiv);
            } else {
                // Lazy load other images
                console.log('Setting up lazy loading for:', imageUrl);
                this.setupLazyImage(sharkImg, imageUrl, loadingDiv);
            }
        });
        
        mainImageWrapper.appendChild(caption);
        imageContainer.appendChild(mainImageWrapper);
        
        // Note: Pending images from other sharks will load when they come into view
        // or after their timeout expires
    }
    
    /**
     * Load image immediately (for current shark)
     */
    loadImageImmediately(img, imageUrl, loadingDiv) {
        img.src = imageUrl;
        img.onload = () => {
            console.log('Priority image loaded:', imageUrl);
            loadingDiv.remove();
            img.style.opacity = "1";
        };
        img.onerror = () => {
            console.log('Priority image failed:', imageUrl);
            loadingDiv.textContent = "Image not available";
            loadingDiv.className = "image-error";
            img.style.opacity = "0";
        };
    }
    
    /**
     * Setup lazy loading for image
     */
    setupLazyImage(img, imageUrl, loadingDiv) {
        // Store the image URL in data-src for lazy loading
        img.dataset.src = imageUrl;
        img.loading = "lazy";
        
        // Add to pending images set
        this.pendingImages.add(imageUrl);
        
        // Observe the image for lazy loading using IntersectionObserver
        if (this.imageObserver) {
            console.log('Observing image for lazy loading:', imageUrl);
            this.imageObserver.observe(img);
            
            // Fallback: force load after 3 seconds if not triggered (shorter timeout for better UX)
            setTimeout(() => {
                if (img.dataset.src && this.pendingImages.has(imageUrl)) {
                    console.log('Forcing lazy image load after timeout:', imageUrl);
                    this.loadImageImmediately(img, imageUrl, loadingDiv);
                    this.pendingImages.delete(imageUrl);
                    this.imageObserver.unobserve(img);
                }
            }, 3000);
        } else {
            console.log('No observer available, loading immediately:', imageUrl);
            this.loadImageImmediately(img, imageUrl, loadingDiv);
        }
    }
    
    showImageModal(imageUrl, speciesName) {
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
            
            if (shark.imageUrl || (shark.imageUrls && shark.imageUrls.length > 0)) {
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