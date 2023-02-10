![MV Logo](/logo.jpg)

# EcmaScript Modules (ESM)
ECMAScript Modules (ESM) is the official standard for JavaScript modules, introduced in ECMAScript 6 (ES6). In comparison to CommonJS (CJS) modules, ESM provides a simpler syntax for declaring and importing modules.

## Similarities to CommonJS
- Both ESM and CJS modules allow you to split your code into separate files and reuse the code in different parts of your application.
- Both ESM and CJS modules use the keyword export to export values and the keyword import to import values from other modules.

## Differences from CommonJS
- In CJS, you use module.exports to export values and require() to import values, while in ESM, you use export and import respectively.
- In CJS, all exports are live objects, which means that changes to an exported value will affect any imported references to that value. In ESM, exports are read-only, so any changes to an exported value will not affect the imported references.

We can export values from a module:

```js
// In a file named "math.js"
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

And then import them in another file:
```js
// In another file
import { add, subtract } from "./math.js";

console.log(add(1, 2)); // 3
console.log(subtract(5, 2)); // 3
```

For comparison, here is the same example using CJS:
```js
// In a file named "math.js"
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

```js
// In another file
const { add, subtract } = require("./math.js");

console.log(add(1, 2)); // 3
console.log(subtract(5, 2)); // 3
```

ESM provides a more modern syntax for declaring and importing modules, and it also has better performance compared to CJS. However, CJS is still widely used in the Node.js ecosystem, so it's important to know both systems.

## #checkoutTheDocs 🔍
- [ECMAScript Modules](https://nodejs.org/api/esm.html)
- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN: Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN: Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

## Video Resources 🎥
- [JavaScript ES6 Modules](https://www.youtube.com/watch?v=cRHQNNcYf6s)
