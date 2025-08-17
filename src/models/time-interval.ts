export class TimeInterval {
    private _begin: number;
    private _end: number;

    constructor(begin: number, end: number) {
        this._begin = begin;
        this._end = end;
    }

    public get begin(): number { return this._begin; }
    public get end(): number { return this._end; }
    public get length(): number { return this._end - this._begin; }

    toString(): string { return `${this.begin}-${this.end}`; }
    toArray(): number[] { return [this._begin, this._end]; }
}