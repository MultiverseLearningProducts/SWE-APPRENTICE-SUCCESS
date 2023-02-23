# Character Login

**Task**: The company MultiGame is designing a new game that has users create characters. In order to collect information on the types of characters that should be incorporated in the game, they have created a React form. They need your help to (1) get the information from the form and (2) generate a card on the page when the user selects "Create Character".

![Final Submit Form](./FinalSubmitForm.png)

## What To Do

The work for this should be done in `Form.js` and `Character.js`

### `Form.js`,
1. Import `useState` at the top of the file.
2. Create the following state variables (and their corresponding updater functions):
    - `name`
    - `backstory`
    - `superpower`
    - `icon`
    - `submit`
3. All state variables should be initialized with a value of `""` except `submit` which should have an initial value of `false`.
4. Create `onChange` event handlers that update `name`, `backstory`, `superpower`, and `icon` state with the values in their corresponding fields when they are updated.
5. Create a `handleSubmit` function that:
    - Accepts the event as a parameter
    - Prevents the default form behavior
    - Updates the `submit` state to be `true`.
    - `console.log` the values currently stored in `name`, `backstory`, `superpower`, `icon`, and `submit`.
6. In the `form` element, create an `onSubmit` event listener and call the `handleSubmit` function. You should see the values logged to the console now.
7. At the top of the file, import `Character.js` component. Below the `<form>` element, add a `<Character/>` element and pass `name`, `backstory`, `superpower`, and `icon` state as props.
8. Create a ternary operator that only renders `<Character/>` element only if `submit` has a value of true. 

### `Character.js
1. Destructure the props in the `Character` function.
2. Update the `cardContainer` with the values stored in `name`, `backstory`, `superpower`, and `icon`. Replace the placeholder text with the values stored in the state variables.