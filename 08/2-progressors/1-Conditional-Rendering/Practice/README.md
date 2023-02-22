# Conditional Rendering

## What To Do
1. In `App.js`, initialize a state called `loggedIn` and a `updateLogin` updater function using the `useState` hook. Initialize `login` with a value of `false`.
2. In `App.js`, import the `Login` component and render it. Pass the `loggedIn` state to the `Login` component.
3. Update the `Login` component so that the login screen displays ***only*** when `loggedIn` state has a value of `false`. Otherwise, we want an `<h3>` element that displays the message "Welcome Back!".

![step 3 output](./step3.png)

4. In `App.js`, change `loggedIn` to have an initial value of `true` to see if this works.
    - **NOTE**: Go look at the section on [Submit Handlers](../../3-Submit-Handlers/README.md) to learn how to update state when login is clicked.
5. Update `App.js` so that `<div className = "container">` and `Item` components only render if `loggedIn` is `true`.
6. We want to be more efficient with our packing. In `Item.js`, add a ❄️ next to any item that has a prop of `refrigerate` of `true`.

![step 6 output](./step6.png)