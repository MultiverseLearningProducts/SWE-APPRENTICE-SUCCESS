// 1. An array called nums has been created. Update the doubles variable with an array that contains all values in the nums array multiplied by 2. Use a map function to solve this problem.
let nums = [3, 10, 1, 25];

let doubles;


// 2. An array called bigNumbers has been created. Update the smallNums variable with the values in bigNumbers divided by 2.
let bigNumbers = [100, 200, 300, 1000, 525600]

let smallNums;


// 3. An array of names has been provided. Update the coders variable with the name and the string "is a coder" added to the end of the string"
/*
Example:
let name = ["Becky", "Luther"];

After the map function coders would look like:
coders = ["Becky is a coder", "Luther is a coder"];
*/
let names = ['Yadira', 'Kadiatou', 'Isaiah', 'Fancisco', 'Darius'];

let coders;


// 4. The variables evens and odds have been initialized. Using a filter function, update each with an array of even and odd values stored in the oneToTen array.
let oneToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evens;
let odds;



// Use the following array for questions 5 and 6
let superheros = ["Black Panther", "Wonder Woman", "Captain Marvel", "Spider Man", "Thor"]

// 5. Use a filter function to update the variable longNames with an array of all superheros that have names longer than 10 characters.
let longNames;



// 6. Update the variable containsC with an array of superheros that have at least one c in their name. This should account for both uppercase and lowercase "c".
let containsC;



// 7. An array of numbers has been stored in sumThis. Sum all the values and store the final value in the total variable.  
let sumThis = [7, 1, 3, 5, 6, 2, 8, 10, 0, 4, 9];

let total;



// 8. An array called epic has been created for you. Update the story variable so it contains a single string with all the words combined together.
/*
Example:
Final output => "a long time ago in a galaxy far far away"
*/
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let story;



// Use the following for questions 9 and 10
const people = [
	{name: 'Yadira', age: 22, nickname: 'Deary', 'Favorite Animal': 'Cat', 'Birth Place': 'Queens', superhero: "Black Panther" }, 
	{name: 'Kadiatou', age: 28,nickname: 'Kadi-B','Favorite Animal': 'Ferret','Birth Place': 'Bronx', superhero: "Wonder Woman"}, 
	{name: 'Isaiah', age: 27,nickname: 'Izzy','Favorite Animal': 'Dog','Birth Place': 'Manhattan', superhero: "Captain Marvel"},
	{name: 'Fancisco', age: 33,nickname: 'Paco','Favorite Animal': 'Sloth','Birth Place': 'Bronx', superhero: "Spider Man"},
	{name: 'Darius', age: 29,nickname: 'DRock','Favorite Animal': 'Zebra','Birth Place': 'Brooklyn', superhero: "Thor"}
]

// 9. Filter the people array to be an array of people that are older than 25. Store the value in the variable oldPeople.

let oldPeople;



// 10. We need an object that contains the name as a key and the nickname as a value. Store the value in the variable nicknames.
/*
Example:
{
    "Yadira": "Deary",
    "Kadiatou": "Kadi-B",
    ...
}
*/

let nicknames;




// 11. An array of objects containing students and test scores has been stored in the students variable. In the variable highPerformers, store only those students that have an average score greater than or equal to a 90.
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];

let highPerformers;

// 12. A 2D array of letters has been stored in the variable values. Update the counts variable with an object whose property names are the values from the arrays and their value is the number of their occurrences. HINT: Take a look at .flat() method!
/*
Expected Output:
{
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
}
*/


const values = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

let counts;


// DO NOT EDIT BELOW THIS LINE
export default { 
    doubles,
    smallNums,
    coders,
    evens,
    odds,
    longNames,
    containsC,
    total,
    story,
    oldPeople,
    nicknames,
    highPerformers,
    counts
};