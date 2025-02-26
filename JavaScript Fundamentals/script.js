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

/*
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

*/
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '2002';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Piu')); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // 10
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); //10