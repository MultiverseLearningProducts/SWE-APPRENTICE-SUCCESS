![logo](/logo.jpg)

# Controlled Inputs
- In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. 
- In React, state is stored and updated using the `useState` hook. 
- Controlled components are those in which a form's data is handled by the component's state. 

## Controlled Inputs Example

Suppose we want to create a controlled input that accepts a users first name. We would start by initializing state.

```jsx
import { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState(''); 
  return (
    <>
    
    </>
  );
}
```

To render a controlled input, we need to do two things:
1. Pass the `value` prop to it (or checked for checkboxes and radios). React will force the input to always have the value you passed. 
2. We then include an `onChange` function that will update the state variable on any edits to the input. `e.target.value` allows us to access the value being typed in the input element.

```jsx
import { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState(''); 
  return (
    <>
        <label>
            First Name:
            <input
            value={firstName} // Force input's value to match state
            onChange = {(e) => setFirstName(e.target.value)} // Update state variable whenever it is edited
            />
        </label>
    </>
  );
}
```

Finally, we can render state using a ternary operator to only render the `p` element if the `firstName` state contains a non-empty string. 

```jsx
import { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState(''); 
  return (
    <>
        <label>
            First Name:
            <input
            value={firstName}
            onChange = {(e) => setFirstName(e.target.value)}
            />
        </label>
        {/* Only render the paragraph element if state contains a non-empty string */}
        {firstName !== '' && <p>Your name is {firstName}.</p>}
    </>
  );
}
```

## #checkoutTheDocs 🔍
- **React**: [`<input>`](https://beta.reactjs.org/reference/react-dom/components/input)
- **React**: [`<select>`](https://beta.reactjs.org/reference/react-dom/components/select)
- **React**: [`<textarea>`](https://beta.reactjs.org/reference/react-dom/components/textarea)

## Video Resource 🎥
- [React Tutorial - Controlled Inputs (forms)](https://www.youtube.com/watch?v=IkMND33x0qQ)