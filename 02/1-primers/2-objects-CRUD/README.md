![MV Logo](../../../logo.jpg)

# Objects 
- Objects in programming are made to mimic objects in real life.
- An object is a standalone entity that can contain properties and methods.
- Objects are written as key-value pairs. Keys allow programmers to label data so that values can easily be found and accessed.

## Object CRUD
- **CREATE**:(1) Declare a variable, (2) set the variable equal to `{}`, and (3) add the key-value pairs of the object inside the braces. 

    ```javascript
    let favShows = {
        steven: "Veep",
        kari: "Golden Girls",
        chandel: "Insecure",
        reid: "Billons",
    }
    ```
- **READ**: Objects can be read using either dot or bracket notation. For either, you use the key to access the value.

    ```javascript
    console.log(favShows.reid);
    console.log(favShows["reid"]);
    // Both print out "Billions"
    ```

- **UPDATE**: Objects are updated using keys and dot or bracket notation. If the key is not present, the item will be added to the object

    ```javascript
    // Updating using dot and bracket notation
    favShows.steven = "Schitts Creek";
    favShows["kari"] = "Great British Baking Show";

    // The key value of tyra doesn't exist, so it is added to the object with the corresponding value
    favShows.tyra = "Squid Game";
    ```

- **DELETE**: Deleting keys from an object with they keyword `delete` will automatically dispose of the value associated with that key.

    ```javascript
    // Deletes the key-value pair of chandel: "Insecure"
    delete favShows.chandel;
    ```

## Creating Objects Using a Constructor
- You can also create an object using the constructor method for an object called `Object()`.

    ```javascript
    let newObj = new Object();
    ```

- Values can then be added using dot notation

    ```javascript
    newObj.val1 = "Updating";
    newObj.val2 = "with";
    newObj.val3 = "dot";
    newObj.val4 = "notation";
    ```

## #checkoutTheDocs 🔍
- **W3Schools**: [JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

## Video Resources 🎥
- [Creating JavaScript Objects](https://www.youtube.com/watch?v=4uVwGw317QM)