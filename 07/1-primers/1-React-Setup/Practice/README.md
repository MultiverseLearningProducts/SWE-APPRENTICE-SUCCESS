# Make a React Page

> Since you are creating the `package.json` as part of this exercise, there are no unit tests. If you are able to create a React page that says "My First React Page!" then you have done everything correct 😀! 

In this folder, complete the following:
1. Use the command line to create a `package.json`.
2. Use the command line to install:
    - Parcel
    - React
    - react-dom
3. In the `package.json` add a start command that will open the `index.html` file and run parcel.
4. Create a `index.html` file with HTML boilerplate code. Between the `body` tags, add a `div` with an id of `app`.
5. In `index.html` between the `body` tags, add the following:
```html
<script type="module" src="index.js"></script>
```
6. Create a file called `index.js`.
7. In `index.js`:
    - Import `React` from react
    - Import `createRoot` from `react-dom`
    - Declare a variable called `app` and use `createRoot` to select for the div with an id of `app`.
    - Write `app.render()`
    - Create an `h1` element with the text "My First React page!" inside `app.render` parenthesis.
7. Run `npm run start` in the command line to see your page!