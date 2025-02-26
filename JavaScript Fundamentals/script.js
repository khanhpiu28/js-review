//Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 1 + 5);

////////////////////////////////////
// Values and Variables
console.log("Piu");
console.log(23);

// let firstName = "Piu";

console.log(firstName);
console.log(firstName);
console.log(firstName);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Piu');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2025;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// Basic Operators
// Math Operators
const now = 2025
const ageKhanh = now - 2002;
const agePiu = now - 2005;
console.log(ageKhanh);

console.log(ageKhanh * 3, ageKhanh / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3  = 2 * 2 * 2
const firstName = "Khanh";
const lastName = "Nguyen";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison math
console.log(ageKhanh > agePiu); // >, <, >=, <=

const isFullAge = agePiu >= 1;
console.log(now - 2002 > now - 2005);

////////////////////////////////////
// Strings and Template Literals
const job = 'student';
const birthYear = 1991;

const piu = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(piu);

const piuNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(piuNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
    console.log('You can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`You is too young. Wait another ${yearsLeft} years :)`);
}


let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
