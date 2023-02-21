![logo](/logo.jpg)

# Submit Handlers
- The default behavior of forms is to send a `POST` request and refresh the page.
- In React, we don't want the page to refresh as this will cause the current value of state to be lost.
- We use JavaScript event listeners to prevent default behavior when a form is submitted.

## Submit Handler Syntax 🖊️

![Submit Handler Syntax](../../assets/SubmitHandler.png)

## Submit Handler Example

We want to create form that will log a persons favorite movie. We can start by initializing `movie` state variable, an updater function, and an `input` element. 

```jsx
function Form() {
    const [movie, setMovie] = useState("");

    return(
        <form>
            <input 
                type = "text"
                name = "movie"
                value = {movie}
                onChange = {(e) => setMovie(e.target.value)}
            />
            <button type = "button" >Submit</button>
        </form>
    )
}
```

Next, we want to create a `submitHandler` function that will be invoked when the user submits the form. The `submitHandler` should:
1. Prevent the default form behavior
2. Do something with the data
3. Reset the value of state to the original value.

```jsx
function Form() {
    const [movie, setMovie] = useState("");

    const submitHandler = (e) => {
        // 1. Prevent the default behavior
        e.preventDefault;
        // 2. Do something with the data
        console.log(movie);
        // 3. Reset the value of state
        setMovie("");
    }

    return(
        <form>
            <input 
                type = "text"
                name = "movie"
                value = {movie}
                onChange = {(e) => setMovie(e.target.value)}
            />
            <button type = "button">Submit</button>
        </form>
    )
}
```

Finally, the `submitHandler` function should be called when there is an `onSubmit` event.

```jsx
function Form() {
    const [movie, setMovie] = useState("");

    const submitHandler = (e) => {
        // 1. Prevent the default behavior
        e.preventDefault;
        // 2. Do something with the data
        console.log(movie);
        // 3. Reset the value of state
        setMovie("");
    }

    return(
        <form>
            <input 
                type = "text"
                name = "movie"
                value = {movie}
                onChange = {(e) => setMovie(e.target.value)}
            />
            <button 
                type = "button"
                onSubmit = {submitHandler}
            >Submit</button>
        </form>
    )
}
```

## #checkoutTheDocs 🔍
- **React**: [Responding to Events](https://beta.reactjs.org/learn/responding-to-events)

## Video Resources 🎥
- [Full React Tutorial - Submit Events](https://www.youtube.com/watch?v=pJiRj02PkJQ)