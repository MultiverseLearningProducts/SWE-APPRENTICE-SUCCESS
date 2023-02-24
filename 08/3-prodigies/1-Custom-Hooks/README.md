# Custom Hooks
- React comes with several built-in Hooks (e.g. `useState` and `useEffect`).
- Often, we want a hook for a specific purpose or we want to reuse logic that we have already written. 
- We can create our own Hooks based on the needs of our application
- Custom hooks in react **MUST** start with the word `use`.

## Custom Hook Example

Consider the pokeAPI that we have been fetching on page load with the `useEffect` hook. This will fetch 15 responses from the 

```jsx
import { useEffect, useState } from 'react';
function App() {
    const [pokeData, setPokemon] = useState("");

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=15")
        .then((res) => res.json())
        .then((data) => setPokemon(data));
    }, []);

    return(
        <>
            <h1>My Favorite Pokemon</h1>
            { /* Only render if the data exists*/ }
            { pokeData ? pokeData.results.map(val => <h3>{val.name}</h3>) : ""}
        </>
    )
}
```

Perhaps our application is making calls to multiple API endpoints, so we want to use this fetch block numerous times. We need to create an hook that can fetch data for any api like the pokeAPI (i.e. no authentication required). 

We start by creating a new file called `useFetch.js` that will contain a function called `useFetch`. We can call the function anything we want, but it **MUST** start with the word `use`.

Finally, we move the state and `useEffect` into the new `useFetch` file.

### **`useFetch.js`**
```jsx
import { useEffect, useState } from 'react';
const useFetch = () => {
    const [pokeData, setPokemon] = useState("");
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=15")
        .then((res) => res.json())
        .then((data) => setPokemon(data));
    }, []);
}

module.exports = useFetch;
```

We now want to generalize this for any url and need to return the state data that will be used in the component where `useFetch` is invoked.

In order to generalize `useFetch`, we will do the following:
1. `url` will accept a parameter url that will contain the API endpoint.
2. We will update the state variable and updater function to be `data` and `setData` rather than the pokemon specific variables.
3. The `url` variable will be added to the fetch call.
4. The `setData` function will replace `setPokemon.
5. Finally, we return `data` so that the response data can be accessed in the component.

### **`useFetch.js`**
```jsx
import { useEffect, useState } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState("");
    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return data;
}

module.exports = useFetch;
```

We can then import our new `useFetch` function into `App.js` and call the function with the pokeAPI url. 

### `App.js`
```jsx
import useFetch from "./useFetch";

function App() {
    const pokeData = useFetch("https://pokeapi.co/api/v2/pokemon/?limit=15")

    return(
        <>
            <h1>My Favorite Pokemon</h1>
            { /* Only render if the data exists*/ }
            { pokeData ? pokeData.results.map(val => <h3>{val.name}</h3>) : ""}
        </>
    )
}
```

## #checkoutTheDocs 🔍
- **React**: [Reusing Logic with Custom Hooks](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components)

## Video Resources 🎥
- [Making a Custom Hook](https://www.youtube.com/watch?v=Jl4q2cccwf0)