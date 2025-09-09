import { CoordinateStore } from "./store";
import { TimeTrack } from "./tracks/time-track";
import { RulerTrack } from "./tracks/ruler-track";
import { LifeEventsTrack } from "./tracks/life-events-track";
import { SharksAndKinEventsTrack } from "./tracks/sharks-and-kin-events-track";
import { FossilSitesEventsTrack } from "./tracks/fossil-sites-events-track";
import { PhylogeneticTreeTrack } from "./tracks/phylogenetic-tree-track";

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
                    <a href="/" class="btn btn-ghost">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Shark Tree
                    </a>
                </nav>
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
            
            #app-container {
                position: relative;
                width: 100%;
                height: calc(100vh - 80px);
                background: var(--color-bg-primary, #FFFFFF);
                display: flex;
                flex-direction: column;
            }
            
            #track-container {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                width: 100%;
                height: 100%;
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
                    height: auto;
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