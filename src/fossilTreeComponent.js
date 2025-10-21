import { CoordinateStore } from "./store";
import { TimeTrack } from "./tracks/time-track";
import { RulerTrack } from "./tracks/ruler-track";
import { LifeEventsTrack } from "./tracks/life-events-track";
import { SharksAndKinEventsTrack } from "./tracks/sharks-and-kin-events-track";
import { FossilSitesEventsTrack } from "./tracks/fossil-sites-events-track";
import { PhylogeneticTreeTrack } from "./tracks/phylogenetic-tree-track";
import { BreadcrumbComponent } from "./components/breadcrumb";

customElements.define("time-track", TimeTrack);
customElements.define("ruler-track", RulerTrack);
customElements.define("life-events-track", LifeEventsTrack);
customElements.define("sharks-and-kin-events-track", SharksAndKinEventsTrack);
customElements.define("fossil-sites-events-track", FossilSitesEventsTrack);
customElements.define("phylogenetic-tree-track", PhylogeneticTreeTrack);

export class FossilTreeComponent extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement("template");
        this.shadow = this.attachShadow({mode: "open"});
        this.storeId = this.createStoreId();
    }

    /*----------------------------------------|
    |                 GETTERS                 |
    |----------------------------------------*/

    getStoreId() { return this.storeId; }
    createStoreId() { return Math.random().toString(16).slice(2); }

    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

    connectedCallback() {
        this.render();
        this.initializeBreadcrumb();
        this.initializeFossilTree();
        this.setupEventListeners();
        this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
        this.resizeObserver.observe(this);
        this.handleResize(); 
    }

    disconnectedCallback() {
        this.removeEventListeners();
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    render() {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
    }

    initializeBreadcrumb() {
        const breadcrumbContainer = this.shadow.querySelector(".breadcrumb-content");
        if (breadcrumbContainer) {
            this.breadcrumbComponent = new BreadcrumbComponent(breadcrumbContainer);
            const breadcrumbItems = BreadcrumbComponent.createBreadcrumbForFossilTree();
            this.breadcrumbComponent.updateBreadcrumb(breadcrumbItems);
        }
    }

    initializeFossilTree() {
        this.addTracks();
    }

    addTracks() {
        const container = this.shadow.querySelector("#track-container");
        const rulerTrack = document.createElement("ruler-track");
        rulerTrack.setAttribute("store", this.storeId);
        container?.appendChild(rulerTrack);

        const timeTrack = document.createElement("time-track");
        timeTrack.setAttribute("store", this.storeId);
        container?.appendChild(timeTrack);

        const lifeEventsTrack = document.createElement("life-events-track");
        lifeEventsTrack.setAttribute("store", this.storeId);
        container?.appendChild(lifeEventsTrack);

        const sharksAndKinEventsTrack = document.createElement("sharks-and-kin-events-track");
        sharksAndKinEventsTrack.setAttribute("store", this.storeId);
        container?.appendChild(sharksAndKinEventsTrack);

        const fossilSitesEventsTrack = document.createElement("fossil-sites-events-track");
        fossilSitesEventsTrack.setAttribute("store", this.storeId);
        container?.appendChild(fossilSitesEventsTrack);

        const phylogeneticTreeTrack = document.createElement("phylogenetic-tree-track");
        phylogeneticTreeTrack.setAttribute("store", this.storeId);
        container?.appendChild(phylogeneticTreeTrack);
    }

    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/

    html() {
        return `
            <style> ${this.css()} </style>
            <div id="app-container">
                <nav id="main-nav">
                </nav>
                <div id="breadcrumb-container">
                    <div class="breadcrumb-header">
                        <div class="breadcrumb-content"></div>
                        <div class="breadcrumb-actions">
                            <a href="/" class="btn btn-ghost">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 8H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 12H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 16H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Shark Tree
                            </a>
                        </div>
                    </div>
                </div>
                <div id="track-container" class="fade-in"></div>
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
                display: inline-flex;
                align-items: center;
                gap: var(--space-2, 0.5rem);
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
            
            .breadcrumb-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
            }
            
            .breadcrumb-content {
                flex: 1;
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
                background: var(--color-bg-primary, #FFFFFF);
                display: flex;
                flex-direction: column;
            }
            
            #track-container {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 100%;
                flex: 1;
                min-height: 0;
                overflow-x: auto;
                overflow-y: hidden;
                padding: var(--space-4, 1rem);
                gap: var(--space-4, 1rem);
            }
            
            /* Responsive Design */
            @media (max-width: 1024px) {
                #track-container {
                    flex-direction: column;
                    overflow-x: hidden;
                    overflow-y: auto;
                    flex: 1;
                    min-height: 0;
                }
            }
            
            @media (max-width: 768px) {
                #main-nav {
                    padding: var(--space-3, 0.75rem);
                }
                
                #track-container {
                    padding: var(--space-2, 0.5rem);
                    gap: var(--space-2, 0.5rem);
                }
            }
            
            /* Loading and Animation States */
            .fade-in {
                animation: fadeIn var(--transition-normal, 250ms ease-in-out);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
    }

    /*----------------------------------------|
    |                HANDLERS                 |
    |----------------------------------------*/

    setupEventListeners() {
        window.addEventListener("wheel", this.wheelHandler.bind(this), { passive: false });
    }

    removeEventListeners() {
        return;
    }

    wheelHandler(event) {
        const store = CoordinateStore.getInstance(this.storeId);
        event.preventDefault();
        store.zoom(event.deltaY);
    }

    handleResize() {
        const height = this.getBoundingClientRect().height;
        if (height > 0) {
            const store = CoordinateStore.getInstance(this.storeId);
            store.scale.range = [0, height];
            store.redrawListeners();
        }
    }
}

customElements.define("fossil-tree-component", FossilTreeComponent);