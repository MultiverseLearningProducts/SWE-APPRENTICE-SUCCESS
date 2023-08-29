// 1. Define an arrow function, `isFamous`, that takes in the number of followers on social media, and returns a boolean indicating whether or not the person is considered "famous". If the person has more than 100,000 followers, they are considered famous, otherwise they are not.  USE THE TERNARY OPERATOR (the tests won't catch this, but practice it, as that's what we learned 😊)
/* 
Examples:
isFamous(50000) should return false
isFamous(150000) should return true
*/





// 2. Define an arrow function, `isHot`, that takes in a temperature (in Celsius), and returns a string indicating whether or not the weather is considered "hot". If the temperature is above 30 degrees, it is hot, otherwise it is not. USE THE TERNARY OPERATOR
/* 
Examples:
isHot(25) should return `not hot`
isHot(35) should return `hot`
*/





/* 3. Define an arrow function, `gradeSystem`, that takes a numerical score as an argument and returns the corresponding letter grade based on the following scale:
    - 90 and above: "A"
    - 80-89: "B"
    - 70-79: "C"
    - 60-69: "D"
    - Below 60: "F"
Examples:
gradeSystem(90) should return "A"
gradeSystem(85) should return "B"
gradeSystem(55) should return "F"
*/





// 4. Define an arrow function, `calculateDiscount`, that takes the original price of an item and a discount percentage as arguments. The function should return the final price after applying the discount. If the discount percentage is greater than or equal to 50, there's an additional 5% discount applied.
/*
Examples:
calculateDiscount(100, 25) returns 75 (a 25% discount)
calculateDiscount(100, 50) returns 45 (a 55% discount)
*/





/* 5. Write a function greetByTime that takes the current hour (in 24-hour format) as an argument and returns a greeting message based on the time of the day:
    5:00 - 11:59: "Good morning!"
    12:00 - 17:59: "Good afternoon!"
    18:00 - 23:59: "Good evening!"
    0:00 - 4:59: "Good night!"
Examples:
    greetByTime(10) should return "Good morning!"
    greetByTime(15) should return "Good afternoon!"
    greetByTime(20) should return "Good evening!"
    greetByTime(2) should return "Good night!"
*/







export { isFamous, isHot, gradeSystem, calculateDiscount, greetByTime };