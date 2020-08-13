import { shop } from '../decorator/flipkart.decorator'

@shop
export class Customer {

    constructor() {
        console.log('created Customer');
    }
}