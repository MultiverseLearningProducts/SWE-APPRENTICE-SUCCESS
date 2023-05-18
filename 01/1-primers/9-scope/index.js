// 1. Currently there is an error in the scope of fixMyScope. Fix the code so that it can be exported to our tests.

{
    let fixMyScope = "Help export me"
}

// 2. A function called updateCity has been written to update the variable myCity. Unfortunately, it currently is returning undefined when the function is executed. Fix scope so that myCity is updated with the specified city everytime updateCity is run.
/*
Examples
updateCity("New York"); // myCity now has the value "New York"
updateCity("London"); // myCity now has the value "London"
updateCity("Chicago");
*/

let myCity;

function updateCity(city){
    let myCity = city;
}

// 2. Create a global variable called currentSum that contains an initial value of zero. Then create a function called incrementSum that increments the currentSum by 1 every time that it is run.
/*
Example
incrementSum()
incrementSum()
incrementSum()
console.log(currentSum) // Outputs the value 3

*/






// DO NOT EDIT BELOW
updateCity("New York")
export default { 
    fixMyScope,
    myCity,
    incrementSum,
};