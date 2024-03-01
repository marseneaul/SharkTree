import { SharkSpecies } from "../models/shark-species";
import { SharkTreeNode } from "../models/shark-tree-node";

export class Utils {
    static getAttributeFromLineOrPath(element: SVGLineElement|SVGPathElement, attribute: string): string|null {
        if (element instanceof SVGLineElement) return element.getAttribute(attribute);
        else if (element instanceof SVGPathElement) return element.dataset[attribute] ?? "0";
        else return "0";
    }

    static sameParentHash(item: SharkSpecies|SharkTreeNode, nextItem: SharkSpecies|SharkTreeNode): boolean {
        if (!(item.getParent() || nextItem.getParent())) return false;
        return item.getParentHash() == nextItem.getParentHash();
    }

    static allSameParentHash(sharkTreeStack: (SharkSpecies|SharkTreeNode)[]) {
        const parentHashes = sharkTreeStack.map(item => item.getParentHash());
        return Array.from(new Set(parentHashes)).length === 1;
    }
}