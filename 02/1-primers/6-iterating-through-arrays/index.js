// 1. An empty array called tenDigits has been declared. Write a for loop that add the numbers 0 to 10 to tenDigits.
/* 
Example:
console.log(tenDigits); ==> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
*/

let tenDigits = [];



// 2. An empty array called reverseTen has been declared. Write a for loop that pushes all numbers 10 to 0 to reverseTen (the order counts!).
/* 
Example:
console.log(reverseTen); ==> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
*/

let reverseTen = [];




// 3. An empty array called evenAdds has been declared. Write a for loop that pushes all EVEN numbers from 1 to 20 evenAdds
/*
Example:
console.log(evenAdds); ==> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
*/

let evenAdds = [];




// 4. Write a function called stringExcept that accepts two arguments, an array of numbers and a number n to remove. The function should return a space-separated string of all the elements in the array except the number n
/* 
Examples: 
stringExcept([1,2,3,4], 3); => "1 2 4"
stringExcept([1,2,3,4], 4); => "1 2 3"
*/

function stringExcept(arr, n){




}

// 5. Create a function levelUp that accepts an array as a parameter. Return the sum of each value multiplied by its position in the array.

/*
Examples:
levelUp(([2, 5, 7, 1]); => returns 22 (0*2 + 1*5 + 2*7 + 1*3)
levelUp(([2, 5]); => returns 5 (0*2 + 1*5)
*/

function levelUp (arr) {




}

// 6. Create a function called maxMinDiff that accepts an array as an argument. The function should return the difference between the smallest and largest element in the array.
/*
Examples
maxMinDiff([6, 10, 3]); => 7
maxMinDiff([6, 10, 1, 1, 11]); => 10
*/

function maxMinDiff(arr){




}

// 7. Write a function called matrixSum that accepts a two-dimensional array (i.e. a matrix) as an argument. The function should return the sum of all values in the 2-dimensional array.
/*
Examples:
matrixSum([[1, 5], [-2, 9]]); => 13
matrixSum([[1, 2, 20], [-2, 10]]); => 31
*/

function matrixSum(arr) {




}

// 8. Create a function called targetPractice that accepts an array, nums, and a target as arguments. The function should return an array containing the indices of the first two numbers in nums which add to the target. If it isn't possible, return false.
/*
Examples:
targetPractice([3, 4, 1, 7], 11); => [1,3]
targetPractice([1, 2, 3], 10); => false;
*/

function targetPractice(nums, target) {







}

// 9. Create a function called arraySameOrdered that accepts two arrays as arguments. arraySameOrdered should return true if the arrays contain the same elements in the same order, otherwise it should return false.
/*
Examples:
arraySameOrdered([1, 2], [1, 2]); => true
arraySameOrdered([1, 2], [2, 1]); => false
arraySameOrdered([1, 2], [2, 3]); => false
*/
function arraySameOrdered(arr1, arr2) {





}

// 10. Create a function called arraySameUnordered that accepts two arrays as arguments. arraySameUnordered should return true if the arrays contain the same elements in ANY order, else false. You can assume there 
/*
arraySameUnordered([1, 2], [1, 2]) => true
arraySameUnordered([1, 2], [2, 1]) => true
arraySameUnordered([1, 2], [2, 3]) => false
*/

function arraySameUnordered(arr1, arr2) {




    
}


// DO NOT EDIT BELOW THIS LINE
export default { 
    tenDigits,
    reverseTen,
    evenAdds,
    stringExcept,
    levelUp,
    maxMinDiff,
    matrixSum,
    targetPractice,
    arraySameOrdered,
    arraySameUnordered
};