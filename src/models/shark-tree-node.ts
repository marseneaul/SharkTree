import { SPECIES_TYPE } from "../constants/enums";
import { SharkConfig, SharkTreeNodeConfig } from "../interfaces/shark-config";
import { SharkSpecies } from "./shark-species";
import { sha256 } from "js-sha256";


export class SharkTreeNode {
    config: SharkTreeNodeConfig
    children: (SharkTreeNode|SharkSpecies)[]
    parent: SharkTreeNode|null
    speciesType: SPECIES_TYPE

    childPaths: ((SVGLineElement|SVGPathElement)[])[]
    parentPath: (SVGLineElement|SVGPathElement)[]
    node: SVGCircleElement

    hash: string

    constructor(sharkTreeConfig: SharkTreeNodeConfig, parent: SharkTreeNode|null = null, speciesType = SPECIES_TYPE.SHARKS) {
      this.config = sharkTreeConfig;
      this.parent = parent;
      this.speciesType = speciesType;
      this.children = [];
      this.childPaths = [];
      this.parentPath = [];

      this.config.children?.forEach((child) => {
        if (child.hasOwnProperty("children")) this.addChild(new SharkTreeNode(child as SharkTreeNodeConfig, this, this.speciesType));
        else this.addChild(new SharkSpecies(child as SharkConfig, this, this.speciesType));
      });

      this.hash = this.getHash();
    }

    /*----------------------------------------|
    |                GETTERS                  |
    |----------------------------------------*/

    getHash(): string {
      if (this.hash) return this.hash;
      const jsonString = JSON.stringify(this.config);
      return sha256(jsonString).toString();
    }

    getHashChain(): string[] {
      let hashChain = [this.getHash()];
      let parent = this.getParent();
      while (parent !== null) {
          hashChain.push(parent.getHash());
          parent = parent.getParent();
      }
      return hashChain;
    }

    getParent(): SharkTreeNode|null {
      return this.parent;
    }

    getParentPath(): (SVGLineElement|SVGPathElement)[] {
      return this.parentPath;
    }

    getLastChildPathSegment(): (SVGLineElement|SVGPathElement) {
      const firstChildPathLength = this.childPaths[0].length;
      return this.childPaths[0][firstChildPathLength - 1];
    }

    getLastParentPathSegment(): (SVGLineElement|SVGPathElement) {
      const parentPathLength = this.parentPath.length;
      return this.parentPath[parentPathLength - 1];
    }

    getParentHash(): string | undefined {
      return this.parent?.getHash();
    }

    /*----------------------------------------|
    |                ADDERS                   |
    |----------------------------------------*/

    addChildPath(childPath: (SVGLineElement|SVGPathElement)[]): void {
      this.childPaths.push(childPath);
    }
  
    addChild(child: SharkTreeNode | SharkSpecies): void {
      this.children.push(child);
    }

    addParentPathSegment(parentPathSegment: (SVGLineElement|SVGPathElement)): void {
      this.parentPath.push(parentPathSegment);
    }

    addParentPathToParentChildPath(): void {
      const parentPath = this.getParentPath();
      this.parent?.addChildPath(parentPath);
    }

    /*----------------------------------------|
    |              HIGHLIGHTING               |
    |----------------------------------------*/

    highlightParentPath(strokeWidth = 3, color = "black", dashPattern: string = "solid"): void {
      this.parentPath.forEach(segment => segment.setAttribute("stroke", color));
      this.parentPath.forEach(segment => segment.setAttribute("stroke-width", `${strokeWidth}`));
      this.parentPath.forEach(segment => dashPattern === "solid" ? segment.removeAttribute("stroke-dasharray") : segment.setAttribute("stroke-dasharray", dashPattern));
    }

}