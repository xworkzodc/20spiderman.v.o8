export class PowerBank {
    //by default it is let
    brand: string = 'MI';
    constructor(brand: string) {
        console.log('created PowerBank')
        this.brand = brand;
    }

    charge(): void {
        console.log('invoked charge')

    }


}

