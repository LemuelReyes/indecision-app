// arguments object - no longer bound with arrow functions 
// this keyword - no longer bound with arrow functions

// const add = function (a,b) {
//     console.log(arguments);
//     return a + b;
// };
// console.log(add(55,1));


// const add = (a,b) => {
//     // console.log(arguments);
//     return a + b;
// };
// console.log(add(55,1, 1001));

// const user = {
//     name: 'Lemuel',
//     cities: ['Burnaby', 'New West', 'Northvan'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };
// console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
    numbers: [5, 10, 15],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((results) => results * this.multiplyBy );
    }
    // numbers - array of numbers 
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
};

console.log(multiplier.multiply()); // [1,2,3] 2 [2,4,6]