import { BaseTrack } from "./base-track";
import { MA_FACTOR } from "../constants/constants";
import { fossilSpeciesConfig } from "../data/fossils/fossil-species";

interface FossilNode {
    name?: string;
    estimatedDate?: string;
    children?: FossilNode[];
    x?: number;
    y?: number;
}

export class PhylogeneticTreeTrack extends BaseTrack {
    data: FossilNode
    constructor() {
        super();
        this.name = "phylogenetic-tree";
        this.label = "Phylogenetic Tree";
        this.width = 400; // Adjust as needed
        this.data = fossilSpeciesConfig as FossilNode; // Cast to interface
    }

    redraw(): void {
        this.refreshCanvas();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = "black";
        this.ctx.font = "12px Roboto, sans-serif";
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "middle";

        // Compute y positions (time-based)
        this.setY(this.data);

        // Compute x positions (layout)
        this.assignX(this.data, 0, this.width);

        // Draw the tree
        this.drawNode(this.data);
    }

    private parseDate(dateStr: string | undefined): number {
        if (!dateStr) return 0;
        const match = dateStr.match(/([\d\.]+)\(Mya\)/);
        if (!match) return 0;
        return parseFloat(match[1]) * MA_FACTOR;
    }

    private setY(node: FossilNode): number {
        if (node.estimatedDate) {
            node.y = this.store.scale.scale(this.parseDate(node.estimatedDate));
            return node.y;
        } else if (node.children && node.children.length > 0) {
            let maxY = 0;
            for (const child of node.children) {
                const childY = this.setY(child);
                if (childY > maxY) maxY = childY;
            }
            node.y = maxY;
            return maxY;
        } else {
            // Empty node; treat as y=0 or skip
            node.y = 0;
            return 0;
        }
    }

    private getLeafCount(node: FossilNode): number {
        if (!node.children || node.children.length === 0) {
            return (node.name || node.estimatedDate) ? 1 : 0; // Skip completely empty nodes
        }
        let sum = 0;
        for (const child of node.children) {
            sum += this.getLeafCount(child);
        }
        return sum;
    }

    private assignX(node: FossilNode, xStart: number, xEnd: number): void {
        if (xEnd - xStart <= 0) return; // Skip zero-width

        node.x = xStart + (xEnd - xStart) / 2;

        if (node.children && node.children.length > 0) {
            const totalLeaves = this.getLeafCount(node);
            if (totalLeaves === 0) return;

            let currentX = xStart;
            for (const child of node.children) {
                const childLeaves = this.getLeafCount(child);
                if (childLeaves === 0) continue;
                const childWidth = (xEnd - xStart) * childLeaves / totalLeaves;
                this.assignX(child, currentX, currentX + childWidth);
                currentX += childWidth;
            }
        }
    }

    private drawNode(node: FossilNode, parentX?: number, parentY?: number): void {
        // Always draw lines and recurse, even if node.y is out of bounds (for partial views)
        const normalFont = "12px Roboto, sans-serif";
        const italicFont = "italic 12px Roboto, sans-serif";

        if (parentX !== undefined && parentY !== undefined && node.x !== undefined && node.y !== undefined) {
            this.ctx.beginPath();
            this.ctx.moveTo(parentX, parentY);
            this.ctx.lineTo(node.x, node.y);
            this.ctx.stroke();
        }

        // Draw text only if in view
        if (node.y !== undefined && node.y >= 0 && node.y <= this.getCanvasHeight() && node.name && node.x !== undefined) {
            this.ctx.textBaseline = "hanging";
            this.ctx.textAlign = "center";
            this.drawStyledText(this.ctx, node.name, node.x + 10, node.y, normalFont, italicFont);
        }

        if (node.children && node.children.length > 0) {
            for (const child of node.children) {
                this.drawNode(child, node.x, node.y);
            }
        }
    }
}