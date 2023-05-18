# That's <i>So</i> Fetch

**TASK**: We need to use a lot of different API endpoints on this page. Rather than writing 4 different `fetch` calls and many different state variables, create a custom function called `useFetch` and call the function to access the provided API endpoints.

![Final Fetch Output](FinalFetch.png)

## API Endpoints:
- [Anime Quotes](https://animechan.vercel.app/api/random)
- [Fox Images](https://randomfox.ca/floof/)
- [Random Dad Jokes](https://icanhazdadjoke.com)
- [PokeAPI](https://pokeapi.co/api/v2/pokemon/)

## What To Do

### `useFetch.js`
1. Create a file called `useFetch.js` in the components folder.
2. Import `useEffect` and `useState` from react.
3. Declare a function called `useFetch` that accepts a `url` as a parameter. After the function declaration make sure to use `module.exports` to export the function.
4. Declare a state variable to hold the data and a setter function to update state with the response from the API. Initialize state with an empty string.
5. Create a `useEffect` that does the following:
    - Calls `fetch` for the `url` that was passed into the function.
    - Converts the response to a JSON object.
    - Calls state setter function to update the `data` state.
6. Finally, return the state variable `data` (the variable holding the API data).

### `Anime.js`
1. Import `useFetch` at the top of the file.
2. Inside the `Anime` function call `useFetch` using the [anime endpoint](https://animechan.vercel.app/api/random) and store the data in a variable.
3. Render the `character` and `quote` in their respective JSX elements.

### `Fox.js`
1. Import `useFetch` at the top of the file.
2. Inside the `Fox` function call `useFetch` using the [fox endpoint](https://randomfox.ca/floof/) and store the data in a variable.
3. If the image exists, render the `image` and assign the `alt` value to "fox". If no image exists, render nothing.

### `DadJoke.js`
1. Import `useFetch` at the top of the file.
2. Inside the `DadJoke` function call `useFetch` using the [fox endpoint](https://icanhazdadjoke.com/) and store the data in a variable.
3. **IMPORTANT**: The Dad Joke API endpoint is configured slightly differently than the other 3 in this exercise. Go back to your `useFetch` function and update the function and pass a request body as follows:

```javascript
fetch(url, {
headers: {
        Accept: "application/json"
    }
})
```
4. Render the `joke` in the JSX element.

### `PokemonCard.js`
1. Import `useFetch` at the top of the file.
2. The pokemon endpoint requires an ID at the end of the API endpoint (e.g. https://pokeapi.co/api/v2/pokemon/121)in order to get the desired pokemon. We want a random pokemon, so use `Math.random()` and `Math.floor` to generate a random number between 1 and 100.
3. Inside the `PokemonCard` function call `useFetch` using the pokemon endpoint with the random number added to the end (e.g. if the number was 99, then the endpoint would be https://pokeapi.co/api/v2/pokemon/99). Store the data in a variable.
4. The images are stored under the `sprites` key. If the image exists, render the `shiny_front` image and assign the `alt` value to pokemon's name. If no image exists, render nothing.
5. Render the `height` and `weight` in their respective JSX elements.