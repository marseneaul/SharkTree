import { SVG_NAMESPACE } from "../constants/strings";

export class Svg {

    static drawText(x: number, y: number, text: string): SVGTextElement { 
        const textSvg = document.createElementNS(SVG_NAMESPACE, "text");
        textSvg.setAttribute("x", x.toString());
        textSvg.setAttribute("y", (y + 5).toString());
        textSvg.setAttribute("text-anchor", "middle");
        textSvg.setAttribute("alignment-baseline", "middle");
        textSvg.setAttribute("font-size", "10");
        textSvg.textContent = text;

        return textSvg;
    }

    static drawLine(x1: number, y1: number, x2: number, y2: number): SVGLineElement {
        const lineSvg = document.createElementNS(SVG_NAMESPACE, "line");
        lineSvg.setAttribute("x1", x1.toString());
        lineSvg.setAttribute("y1", y1.toString());
        lineSvg.setAttribute("x2", x2.toString());
        lineSvg.setAttribute("y2", y2.toString());
        lineSvg.setAttribute("stroke", "black");

        return lineSvg;
    }

    static drawCircle(x: number, y: number, radius: number, fill = "none"): SVGCircleElement {
        const circleSvg = document.createElementNS(SVG_NAMESPACE, "circle");
        circleSvg.setAttribute("cx", `${x}`);
        circleSvg.setAttribute("cy", `${y}`);
        circleSvg.setAttribute("r", `${radius}`);
        circleSvg.setAttribute("fill", fill);
        if (fill == "none") circleSvg.setAttribute("stroke", "black");

        return circleSvg;
    }

    static extendLineToPoint(x1: number, y1: number, targetX: number, targetY: number, length: number): SVGLineElement {
        const dx = targetX - x1;
        const dy = targetY - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
    
        const unitX = dx / distance;
        const unitY = dy / distance;
    
        const x2 = x1 + unitX * length;
        const y2 = y1 + unitY * length;
    
        return Svg.drawLine(x1, y1, x2, y2);
    }
    
    static drawCircleArc(x1: number, y1: number, centerX: number, centerY: number, x2: number, y2: number, radius: number): SVGPathElement {
        const arcSvg = document.createElementNS(SVG_NAMESPACE, "path");
        arcSvg.setAttribute("d", `M ${x2} ${y2} A ${radius} ${radius} 0 0 0 ${x1} ${y1}`);
        arcSvg.setAttribute("fill", "none");
        arcSvg.setAttribute("stroke", "black");

        // Store the original points in the SVG element's dataset
        arcSvg.dataset.x1 = x1.toString();
        arcSvg.dataset.y1 = y1.toString();
        arcSvg.dataset.x2 = x2.toString();
        arcSvg.dataset.y2 = y2.toString();

        return arcSvg;
    }
}