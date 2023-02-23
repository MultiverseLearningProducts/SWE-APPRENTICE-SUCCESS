# React Feedback Form

**TASK**: Multiverse has hired you to create a feedback form that will collect data from future cohorts. They already have the `Form` component, but need your help storing each input field in corresponding state variables. For now, we will render the information on the page, but in future sections we will build out submit handlers!

![Final Form Output](./FinalForm.png)

## What To Do
> All of this code should be done in `Form.js`
1. Import `useState` and create state variables and updater functions to hold the following state:
    - `firstName`
    - `lastName`
    - `country`
    - `input`
2. Initialize all state variables with a value of `""`.
3. Create `onChange` event listeners for the following elements:
    - `<input name="firstname">`
    - `<input name="lastname">`
    - `<select>`
    - `<textarea>`
4. In the `onChange` function, update the corresponding state (`firstName`, `lastName`, `country`, or `input`) with the value currently stored in the corresponding element.
5. In the `<div className = "output">`, create 4 ternary operators (one for each state value). If state has any value except an empty string,  render the current value of this state in a `<p>` element. If the state variable is an empty string, nothing should be rendered. The final output should look like:

```plaintext
First Name: VALUE_OF_firstName_STATE
Last Name: VALUE_OF_lastName_STATE
Country: VALUE_OF_country_STATE
Feedback: VALUE_OF_input_STATE
```

For example, if `firstName`, `lastName`, and `country` have a value and `input` has a value `""`, then you should render:

```plaintext
First Name: VALUE_OF_firstName_STATE
Last Name: VALUE_OF_lastName_STATE
Country: VALUE_OF_country_STATE
```