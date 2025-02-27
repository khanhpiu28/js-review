'use strict';

///////////////////////////////////////
// Functions
function logger() {
    console.log('My name is Piu');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

//////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
    return 2025 - birthYeah;
}
const age1 = calcAge1(2002);

// Function expression
const calcAge2 = function (birthYeah) {
    return 2025 - birthYeah;
}
const age2 = calcAge2(2002);

console.log(age1, age2);

///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2025 - birthYeah;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2025 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2002, 'Piu'));
console.log(yearsUntilRetirement(2005, '#'));

///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
