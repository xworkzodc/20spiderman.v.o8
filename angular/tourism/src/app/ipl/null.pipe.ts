import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'nullpipe'
})
export class NullPipe implements PipeTransform {


    constructor() {
        console.log('created NullPipe');
    }


    transform(value: string, type: string) {
        console.log('invoked nullpipe transform');
        console.log(value);
        if (value !== null && value !== undefined) {
            console.log('not null');
            return value;
        }
        else {
            console.log('null');
            return " ";
        }

    }

}