// Converts between geological time (in units of MYA) to CSS height
export class Scale {
    domain: number[];
    range: number[];

    constructor(domain: number[], range: number[]) {
        this.domain = domain;
        this.range = range;
    }
    
    getDomain(): number[] { return this.domain; }
    getRange(): number[] { return this.range; }

    scale(value: number): number {
        const domainLength = this.domain[1] - this.domain[0];
        const domainFraction = value / domainLength;
        const rangeLength = this.range[1] - this.range[0];
        const scaledValue = this.range[0] + domainFraction * rangeLength;
        return scaledValue;
    }

    inverse(scaledValue: number): number {
        const rangeLength = this.range[1] - this.range[0];
        const rangeFraction = scaledValue / rangeLength;
        const domainLength = this.domain[1] - this.domain[0];
        const value = this.domain[0] + rangeFraction * domainLength;
        return value;
    }
}