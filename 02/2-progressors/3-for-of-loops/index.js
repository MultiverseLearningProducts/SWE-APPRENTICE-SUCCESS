// 1. Create a function called addIt that accepts two arrays, arr1 and arr2. addIt should return the total sum of two arrays. Use for...of loops to solve this problem.
/* 
Example: 
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // total = 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // total = 351

addIt(arr_1, arr_2); => returns 627
*/


function addIt(arr1, arr2) {




}

// 2. Create a function called capitalizeAll that accepts a string and letter as an arguments. capitalizeAll should return the same string with the specified now capitalized.
/*
Examples:
capitalizeAll("cool", "o"); => "cOOl"
capitalizeAll("Coding is fun", "i"); => "CodIng Is fun" 
capitalizeAll("Multiverse", "z"); => "Multiverse"
*/

function capitalizeAll(str, letter){





}

// 3. Create a function called cleanUp that accepts an array as an argument. Coerce each element to a number if possible, otherwise remove the element. The function should return an array of only numbers. You can assume the array is 1 dimensional.
/*
Example:
cleanUp([1, '2', 'three', false]); => [1, 2, 0]
*/

function cleanUp (arr) {





}

// 4. Create a function called bigWords that accepts an array of strings as an argument. bigWords should return an array of words in the input array which are bigger than or equal to the average word length for the array.

/*
Example
bigWords(['i', 'am', 'soo', 'hungry']); => ['soo', 'hungry']
bigWords(['there', 'are', 'some', 'big', 'words']); => ['these', 'some', 'words']
*/

function bigWords (words) {




}

// 5. Create a function called unduplicate that accepts an array of numbers as an argument. Return an array that contains all the numbers of the original array exactly once. Don't change the order of the elements
/* 
unduplicate([1, 2, 2, 3, 4, 5, 5, 6]); => [1, 2, 3, 4, 5, 6]
unduplicate([1, 2, 2, 3, 4]); => [1, 2, 3, 4]
*/

function unduplicate(arr){



    
}

// DO NOT EDIT BELOW THIS LINE
export default { 
    addIt,
    capitalizeAll,
    cleanUp,
    bigWords,
    unduplicate
};