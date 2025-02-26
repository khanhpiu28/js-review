////////////////////////////////////
//  Values and Variables
// 1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
// 2. Log their values to the console.
let country = "VietNam";
let continent = "SEA";
let population = "100M";

console.log(country, continent, population);

////////////////////////////////////
// Data Types
// 1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// 2. Log the types of isIsland, population, country and language to the console.
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

////////////////////////////////////
// let, const and var
let age = 22;
age = 23;

const birthYear = 2002;
// birthYear = 2003;
// const job;

var job = 'programmer';
job = 'student'

lastName = 'Nguyen';
console.log(lastName);

/*
1. Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

3. Try to change one of the changed variables now, and observe what happens.

language = 'vietnamese';
const country = 'Vietnam';
const continent = 'Asia';
const isIsland = false;
isIsland = true;
*/

/*
# CHALLENGE 1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn, BMIMark)

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, markHigherBMI);

