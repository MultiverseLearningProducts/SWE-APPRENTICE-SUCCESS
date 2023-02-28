import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import App  from './App';
import Form from "./components/Form"

test('App renders', () => {
    render(<App />);
    expect(screen.getByText('Tell Us About Yourself')).toBeTruthy();
})

test('Typing the first name input box changes adds the input to the output box with "First Name:" before the text', () => {
    const result = render(<Form />);
    const input = result.container.querySelector('#fname');

    const userTyped = 'Jessica';
    fireEvent.change(input, {target: {value: userTyped}});

    // expect the words to show below
    expect(screen.getByText("First Name: Jessica")).toBeTruthy();
})

test('Typing the last name input box changes adds the input to the output box with "Last Name:" before the text', () => {
    const result = render(<Form />);
    const input = result.container.querySelector('#lname');

    const userTyped = 'Parker';
    fireEvent.change(input, {target: {value: userTyped}});

    // expect the words to show below
    expect(screen.getByText("Last Name: Parker")).toBeTruthy();
})

test('Typing in first and last name fields adds BOTH to the screen', () => {
    const result = render(<Form />);
    const firstInput = result.container.querySelector('#fname');
    const lastInput = result.container.querySelector('#lname');

    const firstName = 'Jessica';
    const lastName = 'Parker'
    fireEvent.change(firstInput, {target: {value: firstName}});
    fireEvent.change(lastInput, {target: {value: lastName}});

    // expect the words to show below
    expect(screen.getByText("First Name: Jessica")).toBeTruthy();
    expect(screen.getByText("Last Name: Parker")).toBeTruthy();
})

test('Typing in text area updates the output values with the text of "Feedback" before the values input', () => {
    const result = render(<Form />);
    const textArea = result.container.querySelector('#text');

    const feedback = 'I am learning to create React forms!';
    fireEvent.change(textArea, {target: {value: feedback}});

    // expect the words to show below
    expect(screen.getByText("Feedback: I am learning to create React forms!")).toBeTruthy();
})

test('Simulates selection', () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    //The value should be the key of the option
    fireEvent.change(getByTestId('select'), { target: { value: "Canada" } })
    let options = getAllByTestId('select-option')
    // Check that state has updated to Canada
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
    fireEvent.change(getByTestId('select'), { target: { value: "Australia" } })
    options = getAllByTestId('select-option')
    // Check that state has updated to Australia
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();

    // Expect screen to output the correct country in state
    expect(screen.getByText("Country: Australia")).toBeTruthy();
})