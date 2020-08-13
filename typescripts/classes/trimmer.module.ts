export class Trimmer {

    //this is IMP standard
    private _lengthAdjustment: number;

    constructor(length: number) {
        this._lengthAdjustment = length;
        console.log('created Trimmer')

    }

    get lengthAdjustment() {
        return this._lengthAdjustment;
    }

    set lengthAdjustment(length: number) {
        this._lengthAdjustment = length;
    }

    trimHair(trimWhat: string, length: number) {
        console.log('invoked trimHair')
        if (length <= this._lengthAdjustment) {
            console.log('can trim' + trimWhat);
        }
    }

}