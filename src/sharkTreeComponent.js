import { lamniformesConfig } from "./data/configs/lamniformes.config.js";
import { heterodontiformesConfig } from "./data/configs/heterodontiformes.config.js";
import { lamnidaeConfig } from "./data/configs/lamnidae.config.js";
import { carcharhinidaeConfig } from "./data/configs/carcharhinidae.config.js";
import { squatiniformesConfig } from "./data/configs/squatiniformes.config.js";
import { hexanchiformesConfig } from "./data/configs/hexanchiformes.config.js";
import { pristiophoriformesConfig } from "./data/configs/pristiophoriformes.config.js";
import { orectolobiformesConfig } from "./data/configs/orectolobiformes.config.js";
import { scyliorhinidaeIConfig } from "./data/configs/scyliorhinidae.i.config.js";
import { scyliorhinidaeIIConfig } from "./data/configs/scyliorhinidae.ii.config.js";
import { scyliorhinidaeIIIConfig } from "./data/configs/scyliorhinidae.iii.config.js";
import { triakidaeConfig } from "./data/configs/triakidae.config.js";
import { squalidaeConfig } from "./data/configs/squalidae.config.js";
import { squaliformesConfig } from "./data/configs/squaliformes.config.js";
import { dalatiidaeConfig } from "./data/configs/dalatiidae.config.js";
import { etmopteridaeConfig } from "./data/configs/etmopteridae.config.js";
import { carcharhiniformesConfig } from "./data/configs/carcharhiniformes.config.js";
import { galeomorphiiConfig } from "./data/configs/galeomorphii.config.js";
import { squalomorphiiConfig } from "./data/configs/squalomorphii.config.js";
import { selachiiConfig } from "./data/configs/selachii.config.js";

import { SharkTree } from "./models/shark-tree.ts";

export class SharkTreeComponent extends HTMLElement {

    constructor() {
        super();

        this.template = document.createElement("template");
        this.shadow = this.attachShadow({mode: "open"});
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
        const sharkTree = new SharkTree(lamniformes);
        console.log(sharkTree)
        const sharkTreeSvg = sharkTree.draw();
        const sharkScreen = this.shadow.querySelector("#shark-screen");
        sharkTree.sharkScreen = sharkScreen;

        const maxDepth = sharkTree.getMaxDepth();
        const taxaSlider = this.shadow.querySelector("#taxa-slider");
        taxaSlider.setAttribute("max", `${maxDepth}`);


        const jsonConfig = {
            color: "gray",
            fins: true,
            finColor: "black"
        };

        const svgElement = this.generateSharkSVG(jsonConfig);
        document.body.appendChild(svgElement);


        const container = this.shadow.querySelector("#phylo-container");
        container.appendChild(sharkTreeSvg);

    }
    
    html() {
        return `
            <style> ${this.css()} </style>
            <div id="slide-container">
                <input type="range" min="1" max="10" value="5" class="slider" id="taxa-slider">
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

    generateSharkSVG(config) {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "200");
        svg.setAttribute("height", "200");
        
        // Shark torpedo shape (body)
        const body = document.createElementNS(svgNS, "path");
        const x = 50;
        const y = 80;
        const topHeight = 70;
        const bottomHeight = 50;
        const width = 150;

        body.setAttribute("d", `M${x},${y} Q${x + width / 2},${y+topHeight} ${x+width},${y} Q${x + width / 2},${y-bottomHeight} ${x},${y} Z`);
        body.setAttribute("fill", config.color || "gray");
        svg.appendChild(body);


        // Fins
        if (config.fins) {
            const fin1 = document.createElementNS(svgNS, "polygon");
            const finWidth = 10;
            fin1.setAttribute("points", `${x+width/4},${y-topHeight/4} ${x+finWidth/2},${y-topHeight/4-finWidth} ${x+finWidth},${y-topHeight/4}`);
            fin1.setAttribute("fill", config.finColor || "black");
            svg.appendChild(fin1);
        
            // const fin2 = document.createElementNS(svgNS, "polygon");
            // fin2.setAttribute("points", "120,50 110,40 100,50");
            // fin2.setAttribute("fill", config.finColor || "black");
            // svg.appendChild(fin2);
        }

        return svg;
    }
}

customElements.define("shark-tree-component", SharkTreeComponent);