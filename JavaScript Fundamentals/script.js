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

// const age = 15;

// if (age >= 18) {
//     console.log('You can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`You is too young. Wait another ${yearsLeft} years :)`);
// }


// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

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

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Piu')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 100;
if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('You is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('You is able to drive!');
} else {
    console.log('Someone else should drive...');
}

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy")
// } else if (scoreDolphins < scoreKoalas) {
//     console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy");
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}