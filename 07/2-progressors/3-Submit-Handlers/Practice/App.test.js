import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import App  from './App';
import From from "./components/Form";

test('App renders', () => {
    render(<App />);
    // expect(screen.getByText('Create a Character')).toBeTruthy();
})

test('Form state is updated as user updates the form', () => {

    const result = render(<App />);
    // Input fields
    const input = result.container.querySelector('input');
    const textarea = result.container.querySelector('textarea');
    // Values for form
    const name = 'Sully the Giant';
    const description = 'Fights scary wizards';
    const superpower = '💨';
    const icon = '🫡';
    fireEvent.change(input, {target: {value: name}});
    fireEvent.change(textarea, {target: {value: description}});

    const form = screen.getByLabelText('form');
    fireEvent.submit(form);

    // expect the words to show below
    expect(screen.getByText("Sully the Giant")).toBeTruthy();
    expect(screen.getByText("Fights scary wizards")).toBeTruthy();
})


test('Character updates with state stored in superpower dropdown when form is submitted', () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    //The value should be the key of the option
    fireEvent.change(getByTestId('select-power'), { target: { value: "💨" } })
    let options = getAllByTestId('power-option')
    // Check that it has selected the correct value
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();

    const form = screen.getByLabelText('form');
    fireEvent.submit(form);
    // Check that it updates the screen with the correct value
    expect(screen.getByText("Superpower: 💨" )).toBeTruthy();
})

test('Character updates with state stored in icon dropdown when form is submitted', () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    //The value should be the key of the option
    fireEvent.change(getByTestId('select-icon'), { target: { value: "😎" } })
    let options = getAllByTestId('select-option')
    // Check that it has selected the correct value
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();

    const form = screen.getByLabelText('form');
    fireEvent.submit(form);
    // Check that it updates the screen with the correct value
    expect(screen.getByText("Icon: 😎" )).toBeTruthy();
})