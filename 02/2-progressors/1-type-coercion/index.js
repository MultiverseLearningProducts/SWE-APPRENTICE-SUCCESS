// 1. Complete the function sumTypeOf so that it return the typeof the sum of the two arguments
/*
Examples:
sumTypeOf(12, 1); ==> 'number'
sumTypeOf("d", 1); ==> 'string'
sumTypeOf(1, 'a'); ==> 'string'
sumTypeOf(true, 1); ==> 'number'
*/

function sumTypeOf(a, b){
    // Write your code here
    
    


}

// 2. Complete the function validateIt. The function accepts two parameters: variable and type and checks if type of variable is matching type. Return true if types match or false if not.
/* Examples:
validateIt(42, 'number'); ==> true
validateIt("42", 'number'); ==> false
*/

function validateIt(variable, type) {
    // Write your code here
   
    


}

// 3. PREDICT THE OUTPUT: Four expressions (expression1, expression2, expression3, and expression4) have been provided. Set the corresponding answer variable to be the expected output. Do NOT simply set the expression equal to the variable.
/*
EXAMPLE:
let expression1 = 1 + "1";
let answer1 = "11"
*/
let expression1 = true + "1";
let expression2 = "number" + 15 + 3;
let expression3 = true == "true";
let expression4 = true + true + false + 4;
let answer1;
let answer2;
let answer3;
let answer4;

// 4. Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
/* - keep order of values like in input array
if type is not presented in input, no corresponding property are expected

Example:

separateTypes(['a', 1, 2, false, 'b'])

Expected output is:
{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
}

*/

function separateTypes(input) {
    


}


// DO NOT EDIT BELOW THIS LINE
export default { 
    sumTypeOf,
    validateIt,
    separateTypes,
    answer1,
    answer2,
    answer3,
    answer4
};
