![logo](/logo.jpg)

# Conditional Rendering
- Often, we want components to display different things depending on different conditions (e.g. display login if a user is not logged in and their name if they are logged in). 
- We can conditionally render JSX using conditional statements and/or ternary operators.
- A ternary operator evaluates a condition and executes a block of code based on the condition. These are often used as an alternative to `if...else` statements. 

## Conditional Rendering Syntax

![Conditional Rendering Syntax](../../assets/ConditionalRendering.png)

## Conditional Rendering Example

We want to create a packing list that renders items and adds a ✔ if the `isPacked` prop is true. We start with the following code:

```jsx
function Item() {
    return (
    <li className="item">{name}</li>
  );
}

export default function PackingList() {
    return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```

Thus, `Space suit` and `Helmet with a golden leaf` should have a ✔ added. We can create a ternary operator that evaluates `isPacked` and returns `name + " ✔"` if `true` and just `name` if `false`.

```jsx

function Item() {
    return (
    <li className="item">
        {isPacked ? name + ' ✔' : name}
    </li>
  );
}

// ... PackingList function not shown
```

This will output the following:

![Final Output for Example](../../assets/conditionalRenderingExample.png)

## #checkoutTheDocs 🔍
- **React**: [Conditional Rendering](https://beta.reactjs.org/learn/conditional-rendering)
- **MDN**: [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## Video Resources 🎥
- [Conditional Rendering in React](https://www.youtube.com/watch?v=4oCVDkb_EIs)