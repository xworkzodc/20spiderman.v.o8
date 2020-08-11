console.log('Hello weldome to type script , learning from x-workz');

// var is no type, re-declare , re-assign and no-scope: NEVER USER 'var' 
var fighter = 'rafale';

if (fighter === 'rafale') {
    var price = 200;
}
console.log('price :' + price)
console.log('fighter :' + fighter);


// let can have type, RECOMMEND to use let 
let spiderman: string = 'WEB';

if (spiderman === 'WEB') {
    let age: number = 2;
    console.log('age :' + age);
}


const INSTITUTE: string = 'X-workz';

console.log(INSTITUTE);

var notMakingSense: unknown;