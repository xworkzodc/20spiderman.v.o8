import { PowerBank } from './powerbank'

let nam: string
let power: PowerBank = new PowerBank('Samsung');


console.log(power.brand);
power.charge();

function total(quantity: number, price: number = 0) {


    let total: number = quantity * price;
}
