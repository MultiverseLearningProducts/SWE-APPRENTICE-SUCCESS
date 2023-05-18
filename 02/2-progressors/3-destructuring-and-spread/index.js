// 1. You have been provided an array of emojis, destructure them into individual variables that match the name of each animal (crab, bee, bear, bunny, and dog)
const emojis = ["🦀", "🐝", "🐻", "🐰", "🐶"];
let crab, bee, bear, bunny, dog;



// 2. You have been provided an array of names. Destructure the first two names into the variables firstName and secondName.
let names = ["Henry", "Amy", "Rebecca", "Sophie"];
let firstName, secondName;



// 3. You have been provided an array of dogs. Destructure the second and third dog (Bella and Charlie) into the variables secondDog and thirdDog
let dogs = ["Max", "Bella", "Charlie", "Daisy"]
let secondDog, thirdDog 



// 4. Below is a list of emojis. Destructure the first two into the provided variables. Store the remaining in a new array called rest.
let emotions = ["😀", "😂", "😇", "😱", "😵", "🫡", "🫠"]
let happy, cry, rest;


// 5. An object called myCar has been provided for you. Destructure each into a variable with the same name as the key (e.g. a variable called brand should store the value "Ford")
const myCar = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
}
let brand, model, type, year, color // Delete this line when you start

// 6. A nested object of student names has been provided for you. Destructure the names ONLY of student2, student3, and student4 into variables using their first name ("Emily Johnson" is stored in the variable emily)
const students = {
    student1: { name: "John Smith", age: 20 },
    student2: { name: "Emily Johnson", age: 22 },
    student3: { name: "Michael Brown", age: 25 },
    student4: { name: "Jessica Davis", age: 18 },
    student5: { name: "Jacob Garcia", age: 21 }
}
let emily, michael, jessica // Delete this line when you start



// DO NOT EDIT BELOW THIS LINE
export default { 
    crab, bee, bear, bunny, dog,
    firstName, secondName,
    secondDog, thirdDog,
    happy, cry, rest,
    brand, model, type, year, color,
    emily, michael, jessica,
};