![logo](/logo.jpg)

# `useEffect` Hook
- The `useEffect` allows us to perform side effects in your components. Examples of side effects are:
    - Fetching data
    - Directly updating the DOM
    - Timers 
-  The `useEffect` hook allows for programs to fetch data once on page load rather than requiring DOM events (`onClick`, `onChange`, etc.) to execute a fetch call.

## `useEffect` Syntax 🖊️

![useEffect Syntax](../../assets/useEffect.png)

> `useEffect` runs once for every time the component is re-rendered. Thus, if you are updating state inside of `useEffect` (like we do with a API `fetch` on page load), then this will create a continuous loop. The dependency array can ensure `useEffect` is not run on every render.

## Fetching Data with `useEffect` Example

We have created an app that will return an [inspirational quote](https://favqs.com/api/qotd) on page load. We need to use the `useEffect` hook to run this once on page load. We start by importing `useEffect` into the file.

```jsx
// Import useEffect hook
import React, {useEffect, useState} from 'react';

function App() {
    const [quote, setQuote] = useState("");

    const quoteRequest = async () => {
        const res = await fetch('https://favqs.com/api/qotd');
        const data = await res.json();
        setQuote(data.quote.body);
    }

    return(
        <h1>{quote}</h1>
    )
}
```

Next, we need to declare a `useEffect` hook inside our function that will call the `quoteRequest` function.

```jsx
import React, {useEffect, useState} from 'react';

function App() {
    const [quote, setQuote] = useState("");

    const quoteRequest = async () => {
        const res = await fetch('https://favqs.com/api/qotd');
        const data = await res.json();
        setQuote(data.quote.body);
    }

    // useEffect hook calls the quoteRequest function
    useEffect(() => {
        quoteRequest();
    })

    return(
        <h1>{quote}</h1>
    )
}
```

This will call the fetch request every time the component re-renders. Since we are updating state inside `useEffect`, this will create a continuous loop. Thus, we need to add an empty dependencies array to invoke `useEffect` only once on page load.

```jsx
import React, {useEffect, useState} from 'react';

function App() {
    const [quote, setQuote] = useState("");

    const quoteRequest = async () => {
        const res = await fetch('https://favqs.com/api/qotd');
        const data = await res.json();
        setQuote(data.quote.body);
    }

    useEffect(() => {
        quoteRequest();
    }, []) // Add an empty dependency array to ensure the fetch call is only run once

    return(
        <h1>{quote}</h1>
    )
}
```

## #checkoutTheDocs 🔍
- **React**: [`useEffect`](https://beta.reactjs.org/reference/react/useEffect)

## Video Resources 🎥
- [useEffect Hook(the basics)](https://www.youtube.com/watch?v=gv9ugDJ1ynU)
- [useEffect Dependencies](https://www.youtube.com/watch?v=jQc_bTFZ5_I)
- [Fetching Data with useEffect](https://www.youtube.com/watch?v=qdCHEUaFhBk)