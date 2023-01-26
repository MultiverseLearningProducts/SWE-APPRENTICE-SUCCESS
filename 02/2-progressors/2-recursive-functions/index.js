 // 1. Create a function called recursiveCounter that accepts a number, n, as an argument. The function should count down from n to 0 using recursion. Each value of n should be printed to the console including 0. If a number less than 0 is provided for n, the function should not return anything
//NOTE: The tests are checking for the number of console.log statements, so make sure to use console.log to print out the values of n.

/*
Example:
recursiveCounter(3);

The console will log:
3
2
1
0
*/

function recursiveCounter(n){



    
    
}

/* 2. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! is 5 factorial or 5 * 4 * 3 * 2 * 1 = 120. 

Create a function, factorial, that accepts a number, n, as an argument and returns the factorial for that number using recursion. A few important notes:
- The value of 0! is 1
- You should return false if a number less than 0 is input

Examples:
factorial(4); => 24; (4 * 3 * 2 * 1)
factorial(5); => 120; (5 * 4 * 3 * 2 * 1)
factorial(6) => 720; (6 * 5 * 4 * 3 * 2 * 1)
*/

function factorial(n){





}

/* 3. How many strings of length 10 can you make using only 'a' and 'b'? Can you write them all down? If the question said of length 3, we could do this by hand:
  'aaa'
  'aab'
  'aba'
  'baa'
  'abb'
  'bab'
  'bba'
  'bbb'
However, what if it was a string of length 10...that seems impossible to do by hand. Create a function getCombinations that accepts a number, n, and returns an array containing all possible combinations of a and b. If n is less than 0 return false.

Examples:
getCombinations(2); => ['aa', 'ab', 'ba', 'bb']
getCombinations(3); => ['aaa', 'aab', 'aba', 'baa', 'abb', bab', 'bba', 'bbb']
*/

function getCombinations(n) {




}

/* 4. Suppose we have a list of pizza toppings:
  pepperoni
  mushroom
  pineapple (YES IT IS GOOD)
  red onion
We can choose up to 3 toppings for our pizza. We are allowed to repeat toppings. Can we list all possible pizzas? Let's suppose we can have only two toppings. Here are the pizzas:
[
  'pepperoni, pepperoni',
  'pepperoni, mushroom',
  'pepperoni, pineapple',
  'pepperoni, red onion',
  'mushroom, pepperoni',
  'mushroom, mushroom',
  'mushroom, pineapple',
  'mushroom, red onion',
  'pineapple, pepperoni',
  'pineapple, mushroom',
  'pineapple, pineapple',
  'pineapple, red onion',
  'red onion, pepperoni',
  'red onion, mushroom',
  'red onion, pineapple',
  'red onion, red onion'
]

Create a function called getPizzas that accepts an array, toppings, and the number of toppings, n. The function should return an array of all possible combinations of toppings in the array given the number of specified toppings (like the two topping example above). A few constraints to consider:
- Return false if they provide a value of n less than 1
- Return false if the array doesn't contain any values (i.e it's empty)

Some example toppings have been provided for you!
*/

const toppings = [
    'pepperoni',
    'mushroom',
    'pineapple',
    'red onion'
];

function getPizzas (toppings, n) {
    


}

// DO NOT EDIT BELOW THIS LINE
export default { 
    recursiveCounter,
    factorial,
    getCombinations,
    getPizzas,
    toppings
};