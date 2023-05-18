![MV Logo](../../../logo.jpg)

# Iterating Through Arrays
- Since arrays have predictable indexed values, loops are useful tool for accessing every item in an array.
- We can iterate through arrays of any size using a `for` loop and the `.length` property. 

## Array Iteration Example

For example, a `for` loop can be used to print out every item in an array:

```javascript
let myFavFoods = ["Fish and Chips", "Tacos", "Pizza", "Pasta", "Sushi"];
for(let i = 0; i < myFavFoods.length; i++){
    console.log(myFavFoods[i]);
}
```

The console will show:
```shell
Fish and Chips
Tacos
Pizza
Pasta
Sushi
```

Additionally, we can mutate/alter items in an array using a for loop. If I wanted to add 5 to every single value in an array, then I could do the following:

```javascript
let myNums = [5, 10, 15, 20]
for(let i = 0; i < myNums.length; i++){
    myNums[i] = myNums[i] + 5;
}
```

After the for loop the array will contain the following values:
```shell
[10, 15, 20, 25]
```
## #checkoutTheDocs 🔍
- **W3Schools**: [JavaScript for Loops](https://www.w3schools.com/js/js_loop_for.asp)

## Video Resources 🎥
- [Looping Through JavaScript Arrays](https://www.youtube.com/watch?v=3hUdq32e2qA)