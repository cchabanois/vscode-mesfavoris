import { CharSequence } from "./CharSequence";
import { AbstractCharSequence } from "./AbstractCharSequence";

export class CharSubSequence extends AbstractCharSequence {

    private readonly offset : number;
    private readonly _length : number;
    private parent : CharSequence;

    constructor(parent : CharSequence, start : number, end : number) {
        super();
        this.parent = parent;
        this.offset = start;
        this._length = end - start;
    }

    public length(): number {
        return this._length;
    }

    public charAt(index : number) : string {
        const parentIndex = this.getParentIndex(index);
        if (parentIndex === undefined) {
            return '';
        }
        return this.parent.charAt(parentIndex);
    }

    public getParentIndex(index : number) : number|undefined {
        if (index < 0 || index >= this._length) {
            return undefined;
        }
        return this.offset + index;
    }

    subSequence(start: number, end: number): CharSequence {
        return new CharSubSequence(this, start, end);
    }

}