// 1. An array of numbers have been created. Spread these values into the spreadMoreNumbers array so that it contains all numbers 1 through 6.
/* 
Expected output
console.log(spreadMoreNumbers) // [1, 2, 3, 4, 5, 6];
*/
const numbers = [1, 2, 3, 4];
let spreadMoreNumbers;

// 2. Combine the fruits and vegies arrays into the foods array. The foods array should be a 1-dimensional array.
const fruits = ["🍎", "🍋", "🍇", "🍓", "🍉"];
const vegies = ["🥦", "🥬", "🥑", "🌶️", "🥒"]
let foods;


// 3. An animals array has been created for you. Store the monkey and penguin in their corresponding variables. Store the remaining values in the rest variable.
const animals = ["🐵", "🐧", "🐔", "🐺", "🦑", "🐙"]
let monkey, penguin, rest


// 4. Create a function called multiply that accepts any number of number values as arguments. The function will return all those values multiplied together. If no argument is provided, return the number 1.
/*
Examples:
multiply(1, 2, 3); => 6
multiply(1, 2, 3, 4); => 24
multiply(1, 2, 7); => 14
multiply() => 1
*/

function multiply() {


    
}


// 5. Create a function called fullName that accepts any number of argument strings and returns that person's full name as a single string:
/*
Examples:
fullName("Dan", "Jones"); => "Dan Jones"
fullName("Preston"); => "Preston"
fullName("Steven", "Joseph", "Kensington", "IV") => "Steven Joseph Kensington IV"
fullName(); => ""
*/

function fullName(){




}

console.log(fullName("Steven", 'Joseph', "Lance"))

// 6. Create a function called findAverage that accepts an object of student names and corresponding score values. findAverage should return the average score rounded to the nearest whole number for any sized object.

/*
findAverage({"Malik": 82, "Mariama": 95}); => 89
findAverage({"Malik": 82, "Mariama": 95, "Wilmer": 78}); => 85
*/


let studentScores = {
    "Malik": 82,
    "Mariama": 95,
    "Wilmer": 78,
    "Francis": 60,
    "Laurel": 96,
    "Dan": 74,
}

function findAverage(){
    



}

export default { 
    spreadMoreNumbers, 
    foods, 
    monkey, penguin, rest,
    multiply,
    fullName, 
    findAverage
};