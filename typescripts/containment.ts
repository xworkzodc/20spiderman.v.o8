
let zoneName = 'Padarayanapura';

zoneName = 'Ulsoor';

console.log('the above concept is called as inference in ts , python , R')



//syntax for an array

let regions: string[];

regions = ['Red', 'Green', 'Orange'];

console.log(regions[1]);

console.log('access all elements in array, i am looping');
console.log('size of array ' + regions.length);
//index 0, 
for (let index = 0; index <= regions.length - 1; index++) {
    console.log('index for loop' + index);
    console.log(regions[index]);
}

regions[2] = 'Purple';

console.log('modified regions array')

for (let index = 0; index < regions.length; index++) {
    console.log(regions[index]);
}

console.log('inserted regions array')
regions.push('Black');
for (let index = 0; index < regions.length; index++) {
    console.log(regions[index]);
}

console.log('delete or popping an element in  regions array')

//regions.pop();

for (let index = 0; index < regions.length; index++) {
    console.log(regions[index]);
}


console.log('lenght of regions ' + regions.length)

for (let index = 0; index < regions.length; index++) {
    console.log(regions[index]);
}
let region: string = regions[0];

if (region === 'Red') {
    let index = 1;
    let noOfElementsToRemove = 2;
    regions.splice(index, noOfElementsToRemove);
}

console.log('lenght of regions ' + regions.length);

for (let index = 0; index < regions.length; index++) {
    console.log(regions[index]);
}


console.log('understanding any type');


let ward: any = 'Chickpet';
console.log(typeof (ward));
ward = 104;

console.log(typeof (ward));

