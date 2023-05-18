// 1. Predict the value that will be returned by problem1. Save your response in the variable answer1 
let b = 10

function problem1(){
    let b = 20;
    return b;
}

b = 30

problem1()

let answer1;

// 2. A function called outer has been declared with an argument called data that is stored in the variable state. Create an inner function that returns the value stored in state as a string "State: DATA_VALUE"
/*
Example:
outer("🦩")(); => returns  "State: 🦩"
outer("🐟")(); => returns  "State: 🐟"

*/
function outer(data) {
    let state = data;
    
    
    
}

// 3. A function called counter has been created for you that accepts a number, n, that can be any number. Create an inner function that increments the value of n by the specified amount. The counter should start at 0.

/*
let threes = counter(3);
threes(); // returns 3
threes(); // returns 6
threes(); // returns 9
*/

function counter(n){
    




}

// 4. Write a function called createBase that accepts a base number. When the function is invoked it should add the specified base to any argument number.
/*
Examples:
let addSeven = createBase(7);
addSeven(10); // returns 17
addSeven(21); // returns 28
*/

function createBase(base){
    




}


// DO NOT EDIT BELOW THIS LINE
export default { 
    answer1,
    outer,
    counter,
    createBase
};